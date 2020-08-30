import React,{ useState, useEffect } from "react"
import { Avatar, Box, Heading, Image, Paragraph} from "grommet"
import ReactHtmlParser from 'react-html-parser'; 

import ApiService from "../services/scribe.tsx"

const api = new ApiService



const Articles = () => {

	const [article1Title, setArtcile1Title] = useState('Title of Article 1')
	const [article2Title, setArticle2Title] = useState('Title of Article 2')
	const [article3Title, setArticle3Title] = useState('Title of Article 3')

	const [article1Body, setArtcile1Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
	const [article2Body, setArticle2Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
	const [article3Body, setArticle3Body] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

	const [article1Owner, setArticle1Owner] = useState('John Doe')
	const [article2Owner, setArticle2Owner] = useState('John Doe')
	const [article3Owner, setArticle3Owner] = useState('John Doe')

	const articles_title = [article1Title, article2Title, article3Title]
	const setArticleTitle = [setArtcile1Title, setArticle2Title, setArticle3Title]

	const articles_body = [article1Body, article2Body, article3Body]
	const setArticleBody = [setArtcile1Body, setArticle2Body, setArticle3Body]

	const articles_owner = [article1Owner, article2Owner, article3Owner]
	const setArticleOwner = [setArticle1Owner, setArticle2Owner, setArticle3Owner]

	const parseBody = (body) => {
		var final_body = []
		for(var i=0; i<body.length; i++){
			var element = body[i]
			if(element.type == "p"){
				final_body.push(element)
			}
		}

		return final_body.slice(0, 2)
	}


	useEffect(() => {
		api.getAllArticles().then( articles => {
            for(var i=0; i<3; i++){
            	const j = i
            	setArticleOwner[i](articles[i].from)
                api.getArticleData(articles[i].id).then(data => {
                	setArticleTitle[j](data.title)
                    setArticleBody[j](parseBody(ReactHtmlParser(data.body)))
                })
            }
        })
    }, [])
	return(
		<Box align="center">
            <Heading> Articles </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}}>
                    <Image fit="cover"src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="2"> {articles_title[0]} </Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="4" margin="small"> { articles_owner[0] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[0] } </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="2"> {articles_title[1]}</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="4" margin="small"> { articles_owner[1] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[1] } </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="2"> {articles_title[2]}</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="4" margin="small"> { articles_owner[2] } </Heading>
                    </Box>
                    <Paragraph size="large" color="dark-6"> { articles_body[2] } </Paragraph>
                </Box>
            </Box>
        </Box>
	)
}

export default Articles