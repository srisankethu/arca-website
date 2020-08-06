import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Button, Layer, TextInput, TextArea } from "grommet"
import {Close, LinkPrevious} from "grommet-icons"

import TagsInput from 'react-tagsinput'
import '../components/react-tags.css'

import ArweaveWallet from "../components/arweavewallet.tsx"

var createReactClass = require('create-react-class')

const SubmitProposal = () => {

  const [show, setShow] = useState()
  const [tags, setTags] = useState([])

  const handleChange = (updatedTags) => {
        setTags(updatedTags)
  }

  const onSubmit = () => {
      setShow(true)
      var arweave = createReactClass({render: Arweave})
      console.log(arweave)
      console.log(ArweaveWallet)
  }

  return (
            <div>
                <Link to='/'><LinkPrevious size='small'/>Back</Link>
                <Box align="center" gap="large" pad="large">
                    <h1>Submit Proposal</h1>
                    <TextInput> </TextInput>
                    <TextArea size="xlarge"> </TextArea>
                    <TagsInput value={tags} onChange={handleChange} />
                    <Button type="submit" primary label="Submit" onClick={() => onSubmit()} />
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
            </div>
        )
}

export default SubmitProposal