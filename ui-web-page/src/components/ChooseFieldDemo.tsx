/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Demo, { WrapDemo } from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import { Form, ChoseField } from 'minions-lib'
import CodeHighlight from 'app/usage/CodeHighlight'
const CbDemo = [
  {
    id: 1,
    name: 'checkbox',
    label: 'Eating',
    value: 'eat'
  },
  {
    id: 2,
    name: 'checkbox',
    label: 'Watching',
    value: 'watch'
  },
  {
    id: 3,
    name: 'checkbox',
    label: 'Talking',
    value: 'talk'
  },
  {
    id: 4,
    name: 'checkbox',
    label: 'Walking',
    value: 'walk'
  }, {
    id: 5,
    name: 'checkbox',
    label: 'Sleeping',
    value: 'sleep'
  }
]
const FormChoseField = (): JSX.Element => {

  const [choseArr, setChoseArr] = React.useState([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(value)
    //doing something with API
  }
  const handleChange = (value: any): void => {
    setChoseArr(value)
  }

  console.log(choseArr)
  return (
    <Demo>
      <Demo style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', columnGap: '20px', paddingLeft: '50px'
      }}>
        <WrapDemo>
          <h2>Form Choose Field - Size Small</h2>
          <Stack>
            <Form onSubmit={handleSubmit} className='form-demo' style={{}}>
              <ChoseField size='small' className='chose-field' multiple={false} onChange={handleChange} value={choseArr} config={CbDemo} />
            </Form>
          </Stack>
        </WrapDemo>
        <WrapDemo>
          <h2>Form Choose Field Multiple - Size Medium</h2>
          <Stack>
            <Form onSubmit={handleSubmit} className='form-demo' style={{}}>
              <ChoseField size='medium' className='chose-field' multiple onChange={handleChange} value={choseArr} config={CbDemo} />
            </Form>
          </Stack>
        </WrapDemo>
        <WrapDemo>
          <h2>Form Choose Field - Size Large</h2>
          <Stack>
            <Form onSubmit={handleSubmit} className='form-demo' style={{}}>
              <ChoseField size='large' className='chose-field' multiple onChange={handleChange} value={choseArr} config={CbDemo} />
            </Form>
          </Stack>
        </WrapDemo>
      </Demo>

      <CodeHighlight>
        {`
        const [choseArr, setChoseArr] = React.useState([])

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          // console.log(value)
          //doing something with API
        }
        const handleChange = (value: any) => {
          setChoseArr(value)
        }

        <Form 
          onSubmit={handleSubmit} 
          className='form-demo' 
          style={{}}
        >
            <ChoseField 
              size='small' 
              className='chose-field' 
              multiple={false} 
              onChange={handleChange} 
              value={choseArr} 
              config={CbDemo} />
        </Form>

        `}
      </CodeHighlight>
    </Demo>
  )
}

export default FormChoseField
