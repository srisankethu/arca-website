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
      <Box as="main" flex overflow="auto">
        {children}
      </Box>
      <Footer background="light-4" justify="evenly" pad="small">
        <Box direction="row" gap="large">
        <img class="grey-image" src={`logo.png`} width="200" height="60"/>
        <Text textAlign="center" size="small" color="dark-5" margin="small">
          © {new Date().getFullYear()} ARCA DAO. All Rights reserved.
        </Text>
        <Text textAlign="center" size="small" color="dark-5" margin="small">
          <Anchor href="/#" color="dark-5">Terms of Service</Anchor>
          {` | `}
          <Anchor href="/#" color="dark-5">Privacy Policy</Anchor>
        </Text>
        </Box>
        <Box direction="row">
        <Text text-align="center" size="small" color="dark-5" margin="small">
          Follow us on
        </Text>
        <Box direction="row" gap="xsmall">
        <Anchor href="/#"><img src={`facebook.png`}/></Anchor><Anchor href="/#"><img src={`twitter.png`}/></Anchor>
        </Box>
        </Box>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
