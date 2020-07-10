import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Paragraph, Button } from "grommet"

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
        <Heading> Articles </Heading>
    </div>
       
    <div id="projects">
        <Heading> Projects </Heading>
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
        <Button primary label="Visit ARWEAVE" href="https://arweave.org" target="_blank"/>
        <Button primary label="Built on the PERMAWEB" href="https://arweaveapps.com" target="_blank"/>
    </div>
        
    <div id = "joinUs">
        <Box>
            <Heading> Why would you join us:</Heading>
            <ul>
                <li> Brainstorm  innovate ideas and build them using decentralized and open source tools.</li>
                <li> Get your hands on Decentralized Finance by taking part of a democratic voting process  to ensure we put our DAI towards the right areas - whelther technology grants or operational tasks.</li>
                <li> Potentially earn DAI through grants and helping ARCA with operational activities.</li>
                <li> Learn the latest in decentralized technology, built around Arweave.</li>
                <li> Network your skills with other developers, investors and blockchain experts.</li>
                <li> Access to test servers and software for developing proof of concepts.</li>
            </ul>
        </Box>
        <Box pad="medium" background="brand">
            <Heading> Be part of ARCADAO</Heading>
            <Paragraph> ARCA is calling all those passionate about technology and Arweave - whelther you are a dev, a network engineer, a social media guru, a writer, a leader, a ower, or even if even you just have the next big, decentralized idea.</Paragraph>
            <Button primary label="Join us" />
        </Box>
    </div>
        
    <div>
        <Heading> Have a vision for the permaweb? </Heading>
        <Paragraph> We exist to fund development of anything that makes the permaweb better, anything that makes it easier to work with, and anything that brings more users in. If you have a cool idea you'd like to bring to life, and the time and skills to make it happen, check out our grant application form</Paragraph>
        <Button primary label="Submit Proposal" />
    </div>
  </Layout>
)

export default IndexPage
