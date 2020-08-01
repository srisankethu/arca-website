import { RouteComponentProps } from "react-router-dom";

export type IArweaveTag = string
export type ArticleTag = string
export type IWalletAddress = string

export default interface INavLink {
	link: string
	title: string
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
	id: number,
	nav: boolean
}

export interface IComment {
	id: string
	articleId: string
	address: string
	content: string
}

export interface IArticle {
	meta: IArticleMeta
	content: IArticleContent
}
export interface IArticleMeta {
	tags: ArticleTag[]
	uniqueId: string
}

export interface IArticleContent {
	title: string
	tagline: string
	body: string
	stringBody?: string
	featuredImg?: IArticleImg
	tags?:string[]
}

export interface IArticleImg {
	title: string
	alt: string
	url: string
}

export interface IInvalidField {
	title: string
	body: string
}

export interface IArticleComment {
	id: string
	from: string
	comment: string
}