import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Button, TextInput, TextArea } from "grommet"
import {LinkPrevious} from "grommet-icons"

import TagsInput from 'react-tagsinput'
import '../components/react-tags.css'

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
                <Box align="center" gap="large" pad="large">
                    <h1>Submit Proposal</h1>
                    <TextInput> </TextInput>
                    <TextArea size="xlarge"> </TextArea>
                    <TagsInput value={this.state.tags} onChange={this.handleChange} />
                    <Button type="submit" primary label = "Submit" />
                </Box>
            </div>
        )
    }
}
