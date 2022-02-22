import CodeHighlight from 'app/usage/CodeHighlight'
import Demo from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import { projectInfors } from 'data/Data'
import { AdvancedCard } from 'minions-lib'
import React from 'react'

const AdvancedCardDemo: React.FC = (): JSX.Element => {
  return (
    <Demo style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      gridGap: '25px',
    }}>
      <Stack>
        <Demo style={{
          width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignContent: 'flex-start'
        }}>
          {projectInfors.map((p, idx) => {
            return (
              <AdvancedCard styled={{ width: '250px', height: '250px', marginRight: '10px' }} cardinfor={p} key={idx} />
            )
          })}
        </Demo>
      </Stack>
      <CodeHighlight>
        {`
        const projectInfors = [
          {
              time: 'December 10,2021',
              major: 'Web Designing',
              type: 'Prototyping',
              progress: 50,
              deadline: 3,
              team: [
                  'P', 'S', 'Q'
              ]
          },
          {
              time: 'December 07,2021',
              major: 'UI-UX Design',
              type: 'Prototyping',
              progress: 75,
              deadline: 2,
              team: [
                  'F', 'N', 'C'
              ]
      
          },
          ...
        ]
        <div>
          {projectInfors.map((p, idx) => {
            return (
              <AdvancedCard cardinfor={p} key={idx} />
            )
          })}
        </div>
        `}
      </CodeHighlight>
    </Demo>
  )
}

export default AdvancedCardDemo
