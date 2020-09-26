import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Button, Form, TextInput, TextArea } from "grommet"
import Arweave from 'arweave/web'
import walletState from "../components/arweavewalletState.tsx"

const arweave = Arweave.init({host: 'arweave.net', port: 443, protocol: 'https'})

const submitTransaction = async (data, key, tag) => {
    let transaction = await arweave.createTransaction(data, sessionStorage.getItem("key"));
    transaction.addTag('app', 'arca')
    transaction.addTag('type', tag)
    await arweave.transactions.sign(transaction, key);

    let uploader = await arweave.transactions.getUploader(transaction);

    while (!uploader.isComplete) {
        await uploader.uploadChunk();
        alert(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
    }
}

const ArweaveWallet = () => {

    const [login, setLogin] = useState(false)
    const [key, setKey] = useState()

    const handleInputChange = event => {

        const reader = new FileReader()
        reader.onload = async (event) => {
            arweave.wallets.jwkToAddress(JSON.parse(reader.result)).then((address) => {
               setLogin(true)
               setKey(event.target.files[0])
            });
        }

        reader.readAsText(event.target.files[0])
    }

    const onSubmit = () => {
        if(login){
            sessionStorage.setItem("login", true)
            sessionStorage.setItem("key", key)
        }
    }

    return (
        <div>
            <Helmet>
                <script async defer src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
            </Helmet>
            <Box align="center" gap="large" pad="large" background="brand">
                <Form>
                    <label> Upload your Arweave wallet </label><br/><br/>
                    <input type="file" onChange={handleInputChange}/><br/><br/>
                    <input type="submit" value = "Upload" onClick={ () => onSubmit() }/>
                </Form>
            </Box>
        </div>
    )
}

export { ArweaveWallet, submitTransaction };
