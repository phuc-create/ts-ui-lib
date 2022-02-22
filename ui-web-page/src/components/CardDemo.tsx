import React from 'react'
import Demo from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import { colorsFull } from '../data/Data'
import { Card } from 'minions-lib'
import CodeHighlight from 'app/usage/CodeHighlight'

const CardDemo = (): JSX.Element => {
  return (
    <Demo style={{ paddingLeft: '50px' }}>
      <Stack>
        {colorsFull.map(s => {
          return <Card infors={s} key={s.id} />
        })}
      </Stack>
      <CodeHighlight>
        {`
        const colorsFull = [
          {
              id: 1,
              img: Person,
              name: 'Louis',
              content: 'How To Write Better Advertising Copy Heading',
              time: '8:30 PM',
              city: 'New York'
          },
          {
              id: 2,
              img: Person2,
              name: 'Louis',
              content: 'Im not good at this ,but this help me ,so I need to became useful in this',
              time: '8:30 PM',
              city: 'New York'
          },
          {
              id: 3,
              img: Person3,
              name: 'Louis',
              content: 'Let make your day more meaningful .',
              time: '8:30 PM',
              city: 'New York'
          },
          {
              id: 4,
              img: Person4,
              name: 'Louis',
              content: 'Only reason I work is my family .',
              time: '8:30 PM',
              city: 'New York'
          }
        ]

        <div>
          {colorsFull.map(s => {
            return <Card infors={s} key={s.id} />
          })}
        </div>
        `}
      </CodeHighlight>
    </Demo>
  )
}

export default CardDemo
