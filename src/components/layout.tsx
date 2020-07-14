import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Grommet, Anchor, Box, Header, Footer, Text, Heading, Button } from "grommet"
import { grommet } from "grommet/themes"


const Layout = ({ children }) => {

  const [permawebstatus, setStatus] = useState('Offline')
  useEffect(() => {
    setInterval(() => {
        fetch('http://perma.online/info').then(response => response.json()).then(setStatus('Online')).catch(setStatus('Offline'))
    }, 30000);
  }, [])

  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header background = "neutral-2" justify="center">
          <Text> LATEST: </Text><Heading margin="small" level="5"> New ARCA DAO Website Launched </Heading>
      </Header>
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
      <Footer background="light-4" justify="center" pad="small">
        <img src={`logo.png`} width="200" height="60"/>
        <Text textAlign="center" size="small">
          © {new Date().getFullYear()} ARCA DAO. All Rights reserved.
          {` `}
          <Anchor href="/#">Terms of Service</Anchor>
          {` | `}
          <Anchor href="/#">Privacy Policy</Anchor>
          Follow us on <a href="/#"><img src={`facebook.png`}/></a><a href="/#"><img src={`twitter.png`}/></a>
        </Text>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
