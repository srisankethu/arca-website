import Arweave from 'arweave/web'
import { IArticle, IArticleContent, IArticleComment, IComment } from '../types/types';
import sanitize from '../utils/sanitizeHtml';
import { query as arqlQuery} from '../utils/arql';
import Transaction from 'arweave/web/lib/transaction';


const arweave = Arweave.init(
	{ host: 'arweave.net', port: 443, protocol: 'https', timeout: 40000 });

const envDevPrefix = 'scribe-alpha-dev-00'
const envProdPrefix = 'scribe-alpha-00'

const prefix = envProdPrefix

export default class ApiService {

	public createSynopsis(body: string) {
		let position = body.indexOf('.', 100)
		let str = `${body.slice(0, position)}...`
		return str
	}

	public async postArticle(article: IArticle, wallet: any, awv: any = arweave) {
		let tx = await awv.createTransaction({
			data: encodeURI(JSON.stringify(article.content))
		}, wallet)
		this.addAppMetaTags(tx, article)
		this.addContentTags(tx, article.meta.tags)
		try {
			await awv.transactions.sign(tx, wallet)
			const post = await awv.transactions.post(tx)
			if (post && post.status !== 200) {
				throw (post.status)
			}
		} catch (err) {
			return { err }
		}
	}

	public async postComment(comment: IComment, wallet: any, awv: any){
		let tx = await awv.createTransaction({
			data: encodeURI(JSON.stringify(comment.content))
		}, wallet)
		this.addCommentTags(tx, comment)
	}

	public async getAllArticles(awv: any = arweave) {
		let query =
		{
			op: 'equals',
			expr1: 'App-Name',
			expr2: `${prefix}`
		}
		try {
			const res = await awv.api.post(`arql`, query)
			return this.createRows(res)
		}
		catch (err) {
			return { err }
		}
	}

	public async getArticlesByTag(tag: string, awv: any = arweave) {

		let query =
		{
			op: 'and',
			expr1: {
				op: 'equals',
				expr1: 'App-Name',
				expr2: prefix
			},
			expr2: arqlQuery({
				[prefix + '-tag']: tag,
				[prefix + '-tag-0']: tag,
				[prefix + '-tag-1']: tag,
				[prefix + '-tag-2']: tag,
				[prefix + '-tag-3']: tag,
				[prefix + '-tag-4']: tag,
				[prefix + '-tag-5']: tag,
			},'or')
		}

		try {
			const res = await setTimeout(awv.api.post(`arql`, query), 60000);
			return this.createRows(res)
		}
		catch (err) {
			return { err }
		}
	}

	public async getArticleData(id: string, awv: any = arweave): Promise<IArticleContent> {
		const tx = await awv.transactions.get(id)
		const data = JSON.parse(
			decodeURI(
				tx.get('data', { decode: true, string: true })
			)
		) as {
			title: string,
			body: string,
			stringBody: string,
			tagline: string
		};
		
		const contentTagRegex = new RegExp(`^${envProdPrefix}-tag-[0-9]$`, 'i');

		const tags: string[] = [];

		tx.get('tags').forEach((tag: any) => {
			let key = tag.get('name', { decode: true, string: true }) as string;
			let value: string = tag.get('value', { decode: true, string: true })
			
			if (contentTagRegex.test(key)) {
				tags.push(value);
			}
		});

		data.body = sanitize(data.body)

		return {
			...data,
			tags: tags
		};
	}

	public async getCommentIds(articleId: string, awv: any = arweave): Promise<string[]> {

		const query = arqlQuery({
			'App-Name': prefix,
			[`${prefix}-type`]: 'comment',
			[`${prefix}-article`]: articleId,
		},'or');

		const res = await awv.api.post(`arql`, query);

		return res.data || [];
	}

	public async getComment(commentId: string, awv: any = arweave): Promise<IComment> {

		const tx = await awv.transactions.get(commentId) as Transaction;

		const data = JSON.parse(
			decodeURI(
				tx.get('data', { decode: true, string: true })
			)
		);

		const articleIdTag = tx.tags.find((tag) => {
			if (tag.get('name', {decode: true, string: true}) == `${prefix}-article`) {
				return true;
			}
		});

		return {
			id: commentId,
			articleId: articleIdTag.get('name', {decode: true, string: true}),
			address: await awv.wallets.ownerToAddress(tx.owner),
			content: data
		}
	}

	private async createRows(
		res: any,
		getData: boolean = false,
		awv: any = arweave,
	) {
		let tx_rows: any[] = []
		if (res.data == '') {
			tx_rows = []
		} else {
			tx_rows = await Promise.all(
				res.data.map(async (id: string) => {

					let tx_row: any = {}
					let tx = await awv.transactions.get(id)
					tx_row['unixTime'] = '0'
					const tags = tx.get('tags')
					if (tags.length) {
						tx_row.tags = []
						tx_row.scribe_data = []
						tx_row.scribe_tags = []
						tags.forEach((tag: any) => {
							let key = tag.get('name', { decode: true, string: true })
							let value: string = tag.get('value', { decode: true, string: true })
							if (
								key === `${prefix}-synopsis` ||
								key === `${prefix}-title` ||
								key === `${prefix}-tagline` ||
								key === `${prefix}-id`) {
								value = decodeURI(value)
								tx_row.scribe_data.push({ key, value })
								return
							} else if (key.indexOf(prefix) > -1) {
								tx_row.scribe_tags.push({ key, value })
							} else {
								tx_row[key] = { key, value }
							}
							if (key === 'Unix-Time') tx_row['unixTime'] = value
						})
					}


					try {
						const data = JSON.parse(decodeURI(await tx.get('data', { decode: true, string: true })));
						const parser = new DOMParser();
						const dom = parser.parseFromString(data.body, 'text/html');

						const img = dom.querySelector('img')

						if (img) {
							const src = img.getAttribute('src');
		
							if (src.startsWith('data:image')) {
								tx_row['image'] = src;
							}
						}

					} catch (error) {
						tx_row['image'] = '';
					} finally{
						if (!tx_row['image']) {
							tx_row['image'] = '';
						}
					}

					tx_row['id'] = id
					tx_row['tx_status'] = 200;//await awv.transactions.getStatus(id)
					tx_row['from'] = await awv.wallets.ownerToAddress(tx.owner)
					tx_row['td_fee'] = awv.ar.winstonToAr(tx.reward)
					tx_row['td_qty'] = awv.ar.winstonToAr(tx.quantity)

					if (getData) {
						tx_row['data'] = await tx.get('data', { decode: true, string: true })
					}

					return tx_row
				}))
		}
		return tx_rows
	}


	private addAppMetaTags(tx: any, article: IArticle) {
		tx.addTag(`${prefix}-synopsis`, encodeURI(this.createSynopsis(article.content.stringBody)))
		tx.addTag('App-Name', `${prefix}`)
		tx.addTag(`${prefix}-id`, this.randomString())
		tx.addTag(`${prefix}-type`, 'article')
		tx.addTag(`${prefix}-title`, encodeURI(article.content.title))
		tx.addTag(`${prefix}-tagline`, encodeURI(article.content.tagline))
		tx.addTag('App-Version', '0.0.1')
		tx.addTag("_apollo.app", "862270");
		tx.addTag('Unix-Time', this.getTime())
		return tx
	}

	private addCommentTags(tx: any, comment: IComment) {
		tx.addTag('App-Name', `${prefix}`)
		tx.addTag(`${prefix}-type`, 'comment')
		tx.addTag(`${prefix}-article`, comment.articleId)
		tx.addTag('App-Version', '0.0.1')
		return tx
	}

	private addContentTags(tx: any, tags: string[]) {
		tags.forEach((tag: string, index: number) => {
			tx.addTag(`${prefix}-tag`, tag)
		})
		return tx
	}

	public checkStatus(awv: any = arweave) {
		awv.network.getInfo().then(console.log)
	}

	private getTime(): number {
		return Math.round((new Date()).getTime() / 1000)
	}

	private randomString() {
		const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var result = '';
		for (var i = 32; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	}
}

export { prefix }