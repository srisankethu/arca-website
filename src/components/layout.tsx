import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Grommet, Anchor, Box, Header, Footer, Text, Nav } from "grommet"
import { grommet } from "grommet/themes"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header background = "brand">
          <Nav direction="row" background="brand" pad="medium">
              <Anchor href = "#about" label = "What is ARCA?" />
              <Anchor href = "#articles" label = "Articles" />
              <Anchor href = "#projects" label = "Projects" />
              <Anchor href = "/#" label = "Submit Proposal" />
          </Nav>
      </Header>
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
      <Footer background="light-4" justify="center" pad="small">
        <Text textAlign="center" size="small">
          © {new Date().getFullYear()} ARCA DAO. All Rights reserved.
          {` `}
          <Anchor href="/#">Terms of Service</Anchor>
          {` | `}
          <Anchor href="/#">Privacy Policy</Anchor>
        </Text>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
