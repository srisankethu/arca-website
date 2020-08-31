import React,{ useState, useEffect } from "react"
import { Anchor, Box, Menu, Nav, Button, Text, ResponsiveContext} from "grommet"
import {Menu as MenuIcon} from "grommet-icons"

const NavBar = () => {

	const [permawebstatus, setStatus] = useState('Offline')
	const [statuscolor, setColor] = useState('status-error')
    useEffect(() => {
        fetch('https://perma.online/info').then(response => response.json()).then(() => {
        	setStatus('Online');
        	setColor('status-ok');
        }).catch( () => {
        	setStatus('Offline');
        	setColor('status-error');
        })
    }, [])
	return(
		<div>
            <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
          	<Nav direction="row" pad="medium" justify="between">
                <img src={`logo.png`} width="200" height="60"/>
                <Menu
                    dropAlign={{"top": "bottom", "right": "right"}}
                    dropBackground="neutral-2"
                    icon=<MenuIcon />
                    items={[
                    	{ label: <Box pad="xsmall" direction ="row" round = "xsmall" gap="small">
                                 <Box pad = "medium" background = {statuscolor} round = "full"/>
                                 <Text color="light-1">{permawebstatus}</Text>
                                 </Box>},
                        { label: 'What is ARCA?', href: "#about" },
                        { label: 'Articles', href: "#articles" },
                        { label: 'Projects', href: "#projects" },
                        { label: 'Submit Proposal', href: "/submitproposal" },
                        { label: 'Join Us', href: "/submitmembership"}
                    ]}
                />
            </Nav>
            
          ) : (
            <Nav direction="row" pad="medium" justify="evenly">
                <Box direction="row" gap="large" align="center">
                <img src={`logo.png`} width="200" height="60"/>
                <Anchor href = "#about" label = "What is ARCA?" color="light-1"/>
                <Anchor href = "#articles" label = "Articles" color="light-1"/>
                <Anchor href = "#projects" label = "Projects" color="light-1"/>
                <Anchor href = "/submitproposal" label = "Submit Proposal" color="light-1"/>
                </Box>
                <Box direction="row" gap="medium">
                <Box pad="xsmall" direction ="row" border = {{ color: "white", size: 'small' }} round = "xsmall" gap="small">
                <Box pad = "small" background = {statuscolor} round = "full"/>
                <Text color="light-1">{permawebstatus}</Text>
                </Box>
                <Button primary href = "/submitmembership" label = "Join Us" color="status-ok"/>
                </Box>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
        </div>
	)
}

export default NavBar