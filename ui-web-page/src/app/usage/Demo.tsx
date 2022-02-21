import React from 'react'

interface DemoProps {
  children?: JSX.Element | JSX.Element[];
}
const Demo: React.FC<DemoProps> = ({ children }) => {

  const renderDemoChild = () => {
    if (!children) return null
    return React.Children.map<React.ReactNode, React.ReactNode>(children, (child, idx) => {
      return React.cloneElement(child as React.ReactElement, {
        index: idx
      })
    })
  }
  return (
    <div className='demo-ui'>{renderDemoChild()}</div>
  )
}

export default Demo
