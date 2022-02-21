import Demo from 'app/usage/Demo'
import React from 'react'
import { Button, Form, TextField } from 'minions-lib'
import Stack from 'app/usage/Stack'
import CodeHighlight from 'app/usage/CodeHighlight'
const FormDemo = (): JSX.Element => {
  const [value, setValue] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { username, email, password, passwordConfirm } = value

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
    //doing something with API
  }

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change input text')
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <Demo>
      <h2>Form</h2>
      <Stack>
        <Form onSubmit={handleSubmit} className='form-control' style={{ width: '400px' }}>
          <TextField
            type='text'
            name='username'
            placeholder='username'
            value={username}
            onChange={handleChangeValue} />
          <TextField
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleChangeValue} />
          <TextField
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleChangeValue} />
          <TextField
            type='password'
            name='passwordConfirm'
            placeholder='confirm password'
            value={passwordConfirm}
            onChange={handleChangeValue} />
          <Button type='submit' id='btn-submit-form' variant='success' style={{ width: '100%' }}>Submit</Button>
        </Form>
      </Stack>
      <CodeHighlight>
        {`
        const [value, setValue] = React.useState({
          username: '',
          email: '',
          password: '',
          passwordConfirm: ''
        })

        const { username, email, password, passwordConfirm } = value

        const handleSubmit = () => {
          //doing something with API
        }
        
        const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
          console.log('change input text')
          setValue({ ...value, [e.target.name]: e.target.value })
        }

        <Form onSubmit={handleSubmit} className='form-control' style={{}}>

        <TextField
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleChangeValue} />

        <TextField
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChangeValue} />

        <TextField
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handleChangeValue} />

        <TextField
          type='password'
          name='passwordConfirm'
          placeholder='confirm password'
          value={passwordConfirm}
          onChange={handleChangeValue} />

          <Button type='submit' id='btn-submit-form' variant='success'>Submit</Button>
        </Form>
        `}
      </CodeHighlight>
    </Demo>
  )
}

export default FormDemo
