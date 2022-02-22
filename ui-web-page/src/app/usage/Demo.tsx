import React from 'react'

interface DemoProps {
  children?: JSX.Element | JSX.Element[];
  style?: Record<string, unknown>;
}
const Demo: React.FC<DemoProps> = ({ children, style }) => {

  const renderDemoChild = () => {
    if (!children) return null
    return React.Children.map<React.ReactNode, React.ReactNode>(children, (child, idx) => {
      return React.cloneElement(child as React.ReactElement, {
        index: idx
      })
    })
  }
  return (
    <div className='demo-ui' style={style}>{renderDemoChild()}</div>
  )
}

export default Demo


export const WrapDemo: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <div style={{ margin: '30px 0px' }}>
      {children}
    </div>
  )
}
