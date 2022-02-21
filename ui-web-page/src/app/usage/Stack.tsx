import React from 'react'
interface StackProps {
  children: JSX.Element | JSX.Element[]
}
const Stack: React.FC<StackProps> = ({ children }) => {
  return (
    <div className='stack-demo'>{children}</div>
  )
}

export default Stack
