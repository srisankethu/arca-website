import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Anchor, Box, Button, Form, FormField, Heading, Paragraph, Text, TextInput, TextArea } from "grommet"
import {LinkPrevious} from "grommet-icons"

interface State { }
interface Props { }

export default class SubmitProposal extends React.Component<State, Props> {
    window: any
    arweave: any
    constructor(props) {
        super(props)
        this.state = {tags: []}
    }

    checkForArweave = () => {
        setTimeout(() => {
            if (!this.window.Arweave) {
                return this.checkForArweave()
            } else {
                this.arweave = this.window.Arweave.init()
                console.log(this.arweave)
            }
        }, 1000)
    }

    handleChange = (tags) => {
        this.setState({tags})
    }

    async componentDidMount() {
        this.window = window
        this.checkForArweave()
    }

    render() {
        return (
            <div>
                <Helmet>
                    <script async defer src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
                </Helmet>
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

                        <Button type="submit" primary label="Submit" />
                    </Form>
                </Box>
                </Box>
            </div>
        )
    }
}
