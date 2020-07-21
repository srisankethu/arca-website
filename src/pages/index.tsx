import React,{ useState, useEffect } from "react"
import { Link } from "gatsby"
import { Anchor, Box, Heading, Paragraph, Nav, Button, Avatar, Text } from "grommet"
import {Checkmark, LinkNext} from "grommet-icons"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="ARCA DAO" />
    <div id="top">
        <NavBar />
        <div id="intro">
            <Heading color="light-1"> An Arweave Community Fund A </Heading>
            <Paragraph color="light-1"> Arca is a Decentralized Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem.</Paragraph>
            <Button primary label="Join us" href="#joinUs" color="status-ok"/>
        </div>
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
                        <Heading level="5" margin="small"> John Doe </Heading>
                    </Box>
                    <Paragraph color="dark-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="3"> Title of Article 2</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="5" margin="small"> John Doe </Heading>
                    </Box>
                    <Paragraph color="dark-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}}>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"/>
                    <Heading level="3"> Title of Article 3</Heading>
                    <Box direction = "row" gap = "small">
                        <Avatar size = "40px" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                        <Heading level="5" margin="small"> John Doe </Heading>
                    </Box>
                    <Paragraph color="dark-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
                </Box>
            </Box>
        </Box>
    </div>
       
    <div id="projects">
        <Box align="center">
            <Heading color="light-1"> Projects </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}} background="light-1" align="center">
                    <img class="card-image" src={`project1.png`} />
                    <Heading level="3"> Feedweave </Heading>
                    <Paragraph color="dark-6"> A Decentralised Community Built Social Network </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}} background="light-1" align="center">
                    <img class="card-image" src={`project2.png`} />
                    <Heading level="3"> Arweave Reverse DNS Gateway </Heading>
                    <Paragraph color="dark-6"> Point a domain you own to your arweave DApp. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}} background="light-1" align="center">
                    <img class="card-image" src={`project3.png`} />
                    <Heading level="3"> Permasnap </Heading>
                    <Paragraph color="dark-6"> Censorship Resistant Moments, embedded on the permaweb. </Paragraph>
                </Box>
            </Box>
        </Box>
    </div>
        
    <div id="about">
        <Box direction = "row" gap="20%" align="center" justify="center">
        <Box>
        <img src={`aboutarca.png`} />
        </Box>
        <Box>
        <Heading> About ARCA </Heading>
        <Paragraph color="dark-6"> ARCA is a Decentralised Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem. </Paragraph>
        <Paragraph color="dark-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Paragraph>
        </Box>
        </Box>
    </div>
        
    <div id="permaweb">
        <Heading color="light-1"> What is Permaweb? </Heading>
        <Paragraph color="light-1"> Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever - for the very first time.</Paragraph>
        <Paragraph color="light-1"> As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.</Paragraph>
        <Box direction = "column" gap = "small" width="medium">
            <Button primary label="Visit ARWEAVE" href="https://arweave.org" target="_blank" color = "lightgreen" icon=<LinkNext color="light-1"/> reverse="true"/>
            <Button primary label="Built on the PERMAWEB" href="https://arweaveapps.com" target="_blank" color = "#1E90FF" icon=<LinkNext color="light-1"/> reverse="true"/>
        </Box>
    </div>
        
    <div id="joinUs">
        <Box direction="row-responsive" gap="none" justify="center">
            <Box width = "large" pad = "medium" border={{ color: "light-3" }} round="small" alignSelf="center">
                <Heading> Why would you join us:</Heading>
                <ul>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6">Brainstorm  innovate ideas and build them using decentralized and open source tools.</Text></li>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6"> Get your hands on Decentralized Finance by taking part of a democratic voting process  to ensure we put our DAI towards the right areas - whelther technology grants or operational tasks.</Text></li>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6"> Potentially earn DAI through grants and helping ARCA with operational activities.</Text></li>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6">Learn the latest in decentralized technology, built around Arweave.</Text></li>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6"> Network your skills with other developers, investors and blockchain experts.</Text></li>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text color="dark-6"> Access to test servers and software for developing proof of concepts.</Text></li>
                </ul>
            </Box>
            <Box pad="medium" background="brand" round="small" alignSelf="center" width="large" align="center">
                <Heading color="light-1"> Be part of ARCADAO</Heading>
                <Paragraph color="light-1"> ARCA is calling all those passionate about technology and Arweave - whelther you are a dev, a network engineer, a social media guru, a writer, a leader, a ower, or even if even you just have the next big, decentralized idea.</Paragraph>
                <Button primary label="Join us" size="medium"/>
            </Box>
        </Box>
    </div>
        
    <div id="submitproposal">
        <Box align="center">
        <img src={`submitproposal.png`} />
        <Heading color="light-1"> Have a vision for the permaweb? </Heading>
        <Paragraph color="light-1"> We exist to fund development of anything that makes the permaweb better, anything that makes it easier to work with, and anything that brings more users in. If you have a cool idea you'd like to bring to life, and the time and skills to make it happen, check out our grant application form</Paragraph>
        <Button label="Submit Proposal" color="light-1"/>
        </Box>
    </div>
  </Layout>
)

export default IndexPage
