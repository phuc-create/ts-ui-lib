import React from 'react'
import Demo from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import { Button, Form, NotiField, TextField } from 'minions-lib'
import CodeHighlight from 'app/usage/CodeHighlight'
const NofiDemo = () => {
  const [value, setValue] = React.useState({
    username: '',
    email: '',
  })

  const { username, email } = value

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
  }

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change input text')
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <Demo>
      <Stack>
        <Form onSubmit={handleSubmit} className='form-control' style={{ width: '400px' }}>
          <TextField
            type='text'
            name='username'
            placeholder='username'
            value={username}
            onChange={handleChangeValue}>
            <NotiField title='success message' type='success' />
          </TextField>

          <TextField
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleChangeValue}>
            <NotiField title='error message' type='error' />
          </TextField>

          <Button
            type='submit'
            id='btn-submit-form'
            variant='success'
            style={{ width: '100%' }}>
            Submit
          </Button>

        </Form>
      </Stack>
      <CodeHighlight>
        {`
        const [value, setValue] = React.useState({
          username: '',
          email: '',
        })
      
        const { username, email } = value
      
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          console.log(value)
        }
      
        const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log('change input text')
          setValue({ ...value, [e.target.name]: e.target.value })
        }
        
        <Form onSubmit={handleSubmit} className='form-control' style={{ width: '400px' }}>
        <TextField
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleChangeValue}>
          <NotiField title='success message' type='success' />
        </TextField>

        <TextField
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChangeValue}>
          <NotiField title='error message' type='error' />
        </TextField>

        <Button
          type='submit'
          id='btn-submit-form'
          variant='success'
          style={{ width: '100%' }}>
          Submit
        </Button>

      </Form>
        `}
      </CodeHighlight>
    </Demo>
  )
}

export default NofiDemo
