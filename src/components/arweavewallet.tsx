import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Button, Form, TextInput, TextArea } from "grommet"

interface State { }
interface Props { }

export default class ArweaveWallet extends React.Component<State, Props> {
    window: any
    arweave: any
    constructor(props) {
        super(props)
        this.state = {login: false}
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

    handleInputChange = event => {

        console.log(event.target.files[0])
        const reader = new FileReader()
        reader.onload = async (event) => {
            this.arweave.wallets.jwkToAddress(JSON.parse(reader.result)).then((address) => {
                this.state.login = true;
            });
        }
        reader.readAsText(event.target.files[0])
    }

    async componentDidMount() {
        this.window = window
        this.checkForArweave()
    }

    getFunc = () => {
        console.log("In Arweave Wallet")
    }

    render() {
        return (
            <div>
                <Helmet>
                    <script async defer src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
                </Helmet>
                <Box align="center" gap="large" pad="large">
                    <Form>
                        <label> Upload your Arweave wallet </label><br/><br/>
                        <input type="file" onChange={this.handleInputChange}/><br/><br/>
                        <input type="submit" value = "Upload" />
                    </Form>
                </Box>
            </div>
        )
    }
}
