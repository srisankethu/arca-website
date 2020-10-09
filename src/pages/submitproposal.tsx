import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Button, Layer, Form, FormField, Text, TextInput, TextArea } from "grommet"
import {Close, LinkPrevious} from "grommet-icons"

import TagsInput from 'react-tagsinput'
import '../components/react-tags.css'

import {ArweaveWallet, submitTransaction} from "../components/arweavewallet.tsx"

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
          submitTransaction(JSON.stringify(document.getElementById("proposal-form")), sessionStorage.getItem("key"), "proposal-form")
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
                  <Form id="proposal-form">
                    <Box gap = "large">
                    <h1>Submit Proposal</h1>
                    <FormField label = "Proposal Title">
                          <TextInput />
                    </FormField>
                    <FormField label = "Proposal Body">
                          <TextArea fill="true" />
                    </FormField>
                    <FormField>
                          <TagsInput value={tags} onChange={handleChange} />
                    </FormField>
                    <Button type="submit" primary label=<b>Submit</b> onClick={() => onSubmit()} />
                    </Box>
                    {show && (
                        <Layer
                            onEsc={() => setShow(false)}
                            onClickOutside={() => setShow(false)}
                        >
                        <Button icon=<Close /> onClick={() => setShow(false)} alignSelf="end"/>
                        <ArweaveWallet />
                        </Layer>
                    )}
                    
                  </Form>
                </Box>
            </div>
        )
}

export default SubmitProposal