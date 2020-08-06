import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Anchor, Box, Button, Form, FormField, Heading, Layer, Paragraph, Text, TextInput, TextArea } from "grommet"
import {Close, LinkPrevious} from "grommet-icons"

import ArweaveWallet from "../components/arweavewallet.tsx"

const SubmitMembership = () => {

  const [show, setShow] = useState()
  return (
            <div>
                <Link to='/'><LinkPrevious size='small'/>Back</Link>
                <Box direction="column" align="center">
                <Box>
                <Heading> Interested in joining ARCA? An Arweave DAO </Heading>
                <Text> ARCA is the first a community-governed DAO, that will develop and expand the Arweave ecosystem and network.</Text>
                <Text> For more information about ARCA: </Text>
                <Anchor to="https://medium.com/@arweave/the-arca-dao-is-launched-71d59fd79f7">https://medium.com/@arweave/the-arca-dao-is-launched-71d59fd79f7</Anchor>
                </Box>
                
                <Box gap="large" pad="large">
                    <Form>
                        <FormField label = "What's your discord handle?">
                            <TextInput />
                        </FormField>
                        <FormField label = "What's your email address?">
                            <TextInput />
                        </FormField>
                        <FormField label = "Please provide  a LinkedIn or Github profile URL">
                            <TextInput />
                        </FormField>
                        <FormField label = "Where are you located?">
                            <TextInput />
                        </FormField>
                        <FormField label = "Please provide us with a short bio">
                            <TextInput />
                        </FormField>
                        <FormField label = "Are you referred by an existing ARCA member(s)?">
                            <TextInput />
                        </FormField>
                        <FormField label = "Why do want to join ARCA">
                            <TextInput />
                        </FormField>
                        <FormField label = "What value do you bring to the group?">
                            <TextInput />
                        </FormField>
                        <FormField label = "What are you currently most excited about Arweave and why?">
                            <TextInput />
                        </FormField>
                        <FormField label = "What is currently missing in the Arweave ecosystem and do you suggest to solve that?">
                            <TextInput />
                        </FormField>
                        <FormField label = "Provide an ETH address that will be whitelisted for your ARCA membership">
                            <TextInput />
                        </FormField>
                        <Heading level = "5"> Don't forget to keep in touch with us on Twitter </Heading>
                        <Anchor to="https://twitter.com/ARCA_DAO">https://twitter.com/ARCA_DAO</Anchor><br/><br/>

                        <Button type="submit" primary label="Submit" onClick={() => setShow(true)} />
                    </Form>
                    {show && (
                        <Layer
                            onEsc={() => setShow(false)}
                            onClickOutside={() => setShow(false)}
                        >
                        <Button icon=<Close /> onClick={() => setShow(false)} alignSelf="end"/>
                        <ArweaveWallet />
                        </Layer>
                    )}

                </Box>
                </Box>
            </div>
        )
}

export default SubmitMembership