import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Button, Form, TextInput, TextArea } from "grommet"
import Arweave from 'arweave/web'
import walletState from "../components/arweavewalletState.tsx"

const arweave = Arweave.init({host: 'arweave.net', port: 443, protocol: 'https'})

const ArweaveWallet = () => {

    const [login, setLogin] = useState(false)

    const handleInputChange = event => {

        console.log(event.target.files[0])
        const reader = new FileReader()
        reader.onload = async (event) => {
            arweave.wallets.jwkToAddress(JSON.parse(reader.result)).then((address) => {
               setLogin(true)
            });
        }

        reader.readAsText(event.target.files[0])
    }

    const getFunc = () => {
        console.log("In Arweave Wallet")
    }

    return (
        <div>
            <Helmet>
                <script async defer src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
            </Helmet>
            <Box align="center" gap="large" pad="large">
                <Form>
                    <label> Upload your Arweave wallet </label><br/><br/>
                    <input type="file" onChange={handleInputChange}/><br/><br/>
                    <input type="submit" value = "Upload" />
                </Form>
            </Box>
        </div>
    )
}

export default ArweaveWallet
