import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Button, Layer, Text, TextInput, TextArea } from "grommet"
import {Close, LinkPrevious} from "grommet-icons"

import TagsInput from 'react-tagsinput'
import '../components/react-tags.css'

import ArweaveWallet from "../components/arweavewallet.tsx"
import { walletState } from "../components/arweavewalletState.tsx"

var createReactClass = require('create-react-class')

const SubmitProposal = () => {

  window.addEventListener('storage', function(){
      if(sessionStorage.getItem("login")){
          setShow(false);
      }
  });

  const [show, setShow] = useState(false)
  const [tags, setTags] = useState([])

  const handleChange = (updatedTags) => {
        setTags(updatedTags)
  }

  const onSubmit = () => {
      if(sessionStorage.getItem("login")){
          ;
      }
      else{
          setShow(true);
      }
  }

  return (
            <div>
                <Link to='/'>
                <Box direction="row" gap="small" pad = "medium"> 
                    <LinkPrevious size = "medium" />
                    <Text> Back </Text>

                </Box>
                </Link>
                <Box align="center" gap="large" pad="large">
                    <h1>Submit Proposal</h1>
                    <TextInput> </TextInput>
                    <TextArea size="xlarge"> </TextArea>
                    <TagsInput value={tags} onChange={handleChange} />
                    <Button type="submit" primary label=<b>Submit</b> onClick={() => onSubmit()} />
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