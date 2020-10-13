import React,{ useState, useEffect } from "react"
import { Avatar, Box, Heading, Image, Paragraph} from "grommet"
import ReactHtmlParser from 'react-html-parser'; 
import Arweave from 'arweave/web'
import { get } from 'arweave-id';
import ApiService from "../services/scribe.tsx"

const api = new ApiService
const arweave = Arweave.init({host: 'arweave.net', port: 443, protocol: 'https'})


const Articles = () => {

	const [article1Title, setArticle1Title] = useState('Title of Article 1')
	const [article2Title, setArticle2Title] = useState('Title of Article 2')
	const [article3Title, setArticle3Title] = useState('Title of Article 3')

	const [article1Body, setArtcile1Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
	const [article2Body, setArticle2Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
	const [article3Body, setArticle3Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

	const [article1Owner, setArticle1Owner] = useState('John Doe')
	const [article2Owner, setArticle2Owner] = useState('John Doe')
	const [article3Owner, setArticle3Owner] = useState('John Doe')

    const [article1Image, setArticle1Image] = useState('//v2.grommet.io/assets/Wilderpeople_Ricky.jpg')
    const [article2Image, setArticle2Image] = useState('//v2.grommet.io/assets/Wilderpeople_Ricky.jpg')
    const [article3Image, setArticle3Image] = useState('//v2.grommet.io/assets/Wilderpeople_Ricky.jpg')

    const [article1Avatar, setArticle1Avatar] = useState('//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80')
    const [article2Avatar, setArticle2Avatar] = useState('//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80')
    const [article3Avatar, setArticle3Avatar] = useState('//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80')

	const articles_title = [article1Title, article2Title, article3Title]
	const setArticleTitle = [setArticle1Title, setArticle2Title, setArticle3Title]

	const articles_body = [article1Body, article2Body, article3Body]
	const setArticleBody = [setArtcile1Body, setArticle2Body, setArticle3Body]

	const articles_owner = [article1Owner, article2Owner, article3Owner]
	const setArticleOwner = [setArticle1Owner, setArticle2Owner, setArticle3Owner]

    const articles_images = [article1Image, article2Image, article3Image]
    const setArticleImage = [setArticle1Image, setArticle2Image, setArticle3Image]

    const articles_avatar = [article1Avatar, article2Avatar, article3Avatar]
    const setArticleAvatar = [setArticle1Avatar, setArticle2Avatar, setArticle3Avatar]

	const parseBody = (body) => {
		var final_body = []
        var img = null
		for(var i=0; i<body.length; i++){
			var element = body[i]
			if(element.type == "p"){
                if(element.props.children[0].type == "img"){
                    img = React.createElement("img", {
                        src: element.props.children[0].props.src
                    }, null);
                }
                else{
                    final_body.push(element);
                }
			}
		}

		return [img, final_body.slice(0, 1)]
	}


	useEffect(() => {
		api.getAllArticles().then( articles => {
            for(var i=0; i<3; i++){
            	const j = i
            	setArticleOwner[i](articles[i].from)
                get(articles[i].from, arweave).then(arweaveid => {
                    if(arweaveid){
                        if(arweaveid.avatarDataUri){
                            setArticleAvatar[j](arweaveid.avatarDataUri);
                        }
                    }
                });
                api.getArticleData(articles[i].id).then(data => {
                	setArticleTitle[j](data.title)
                    var [img, body] = parseBody(ReactHtmlParser(data.body))
                    setArticleBody[j](body)
                    setArticleImage[j](img.props.src)
                })
            }
        })
    }, [])
	return(
		<Box align="center">
            <Heading> Articles </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}} width="large">
                    {articles_images[0] && (
                        <Image fill="false" fit="cover" src={ articles_images[0] }/>
                    )}
                    <Heading level="2"> {articles_title[0]} </Heading>
                    <Box direction = "row" gap = "small" align="center">
                        {articles_avatar[0] && (
                            <Avatar size = "40px" src={ articles_avatar[0] } />
                        )}
                        <Heading level="4" margin="small"> { articles_owner[0] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[0] } </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}} width="large">
                    {articles_images[1] && (
                        <Image fill="false" fit="cover" src={ articles_images[1] }/>
                    )}
                    <Heading level="2"> {articles_title[1]}</Heading>
                    <Box direction = "row" gap = "small" align="center">
                        {articles_avatar[1] && (
                            <Avatar size = "40px" src={ articles_avatar[1] } />
                        )}
                        <Heading level="4" margin="small"> { articles_owner[1] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[1] } </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}  width="large">
                    {articles_images[2] && (
                        <Image fill="false" fit="cover" src={ articles_images[2] }/>
                    )}
                    <Heading level="2"> {articles_title[2]}</Heading>
                    <Box direction = "row" gap = "small" align="center">
                        {articles_avatar[2] && (
                            <Avatar size = "40px" src={ articles_avatar[2] } />
                        )}
                        <Heading level="4" margin="small"> { articles_owner[2] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[2] } </Paragraph>
                </Box>
            </Box>
        </Box>
	)
}

export default Articles