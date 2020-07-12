import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Paragraph, Button, Avatar, Text } from "grommet"
import {Checkmark} from "grommet-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
        <Heading> An Arweave Community Fund A </Heading>
        <Paragraph> Arca is a Decentralized Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem.</Paragraph>
        <Button primary label="Join us" href="#joinUs"/>
    </div>
        
    <div id="articles">
        <Box align="center">
            <Heading> Articles </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}}>
                    <Image fit="cover"src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="3"> Title of Article 1</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="5"> John Doe </Heading>
                    </Box>
                    <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="3"> Title of Article 2</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="5"> John Doe </Heading>
                    </Box>
                    <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="3"> Title of Article 3</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="5"> John Doe </Heading>
                    </Box>
                    <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
            </Box>
        </Box>
    </div>
       
    <div id="projects">
        <Box align="center">
            <Heading> Projects </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}}>
                    <img src={`project1.png`} />
                    <Heading level="3"> Feedweave </Heading>
                    <Paragraph> A Decentralised Community Built Social Network </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <img src={`project2.png`} />
                    <Heading level="3"> Arweave Reverse DNS Gateway </Heading>
                    <Paragraph> Point a domain you own to your arweave DApp. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <img src={`project3.png`} />
                    <Heading level="3"> Permasnap </Heading>
                    <Paragraph> Censorship Resistant Moments, embedded on the permaweb. </Paragraph>
                </Box>
            </Box>
        </Box>
    </div>
        
    <div id="about">
        <Heading> About ARCA </Heading>
        <Paragraph> ARCA is a Decentralised Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem. </Paragraph>
        <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Paragraph>
    </div>
        
    <div>
        <Heading> What is Permaweb? </Heading>
        <Paragraph> Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever - for the very first time.</Paragraph>
        <Paragraph> As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.</Paragraph>
        <Box direction = "row" gap = "small">
            <Button primary label="Visit ARWEAVE" href="https://arweave.org" target="_blank" color = "lightgreen"></Button>
            <Button primary label="Built on the PERMAWEB" href="https://arweaveapps.com" target="_blank" color = "#1E90FF"></Button>
        </Box>
    </div>
        
    <div id = "joinUs">
        <Box direction="row">
            <Box width = "xlarge">
                <Heading> Why would you join us:</Heading>
                <ul>
                    <li style="list-style-type:none"><Checkmark color="green"/> Brainstorm  innovate ideas and build them using decentralized and open source tools.</li>
                    <li style="list-style-type:none"><Checkmark color="green"/> Get your hands on Decentralized Finance by taking part of a democratic voting process  to ensure we put our DAI towards the right areas - whelther technology grants or operational tasks.</li>
                    <li style="list-style-type:none"><Checkmark color="green"/> Potentially earn DAI through grants and helping ARCA with operational activities.</li>
                    <li style="list-style-type:none"><Checkmark color="green"/> Learn the latest in decentralized technology, built around Arweave.</li>
                    <li style="list-style-type:none"><Checkmark color="green"/> Network your skills with other developers, investors and blockchain experts.</li>
                    <li style="list-style-type:none"><Checkmark color="green"/> Access to test servers and software for developing proof of concepts.</li>
                </ul>
            </Box>
            <Box pad="medium" background="brand">
                <Heading> Be part of ARCADAO</Heading>
                <Paragraph> ARCA is calling all those passionate about technology and Arweave - whelther you are a dev, a network engineer, a social media guru, a writer, a leader, a ower, or even if even you just have the next big, decentralized idea.</Paragraph>
                <Button primary label="Join us" />
            </Box>
        </Box>
    </div>
        
    <div>
        <Box align="center">
        <img src={`submitproposal.png`} />
        <Heading> Have a vision for the permaweb? </Heading>
        <Paragraph> We exist to fund development of anything that makes the permaweb better, anything that makes it easier to work with, and anything that brings more users in. If you have a cool idea you'd like to bring to life, and the time and skills to make it happen, check out our grant application form</Paragraph>
        <Button label="Submit Proposal" color="light-2"/>
        </Box>
    </div>
  </Layout>
)

export default IndexPage
