import React from 'react'
import { Button } from 'minions-lib'
import Demo from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import CodeHighlight from 'app/usage/CodeHighlight'

const ButtonDemo = () => {
  const handleCon = () => console.log('hi')
  return (
    <Demo>
      <h2>Button</h2>
      <Stack>
        <Button variant='primary' id='button' type='button' onClick={handleCon}>Button</Button>
        <Button variant='secondary' id='button' type='button' onClick={handleCon}>Button</Button>
        <Button variant='success' id='button' type='button'>Button</Button>
        <Button id='button' type='button'>Button</Button>
      </Stack>
      <CodeHighlight>
        {`
        const handleClick = () => console.log('hi')

        <Button 
          variant='primary' 
          id='button' 
          type='button' 
          onClick={handleClick}>
            Button
        </Button>

        <Button 
          variant='secondary' 
          id='button' 
          type='button'>
            Button
        </Button>

        <Button 
          variant='success'
          id='button' 
          type='button'>
            Button
        </Button>
        
        <Button 
          id='button' 
          type='button'>
            Button
        </Button>`}
      </CodeHighlight>
    </Demo >
  )
}

export default ButtonDemo
