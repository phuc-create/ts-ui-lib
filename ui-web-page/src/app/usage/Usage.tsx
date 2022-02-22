import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import RouterDemo from './RouterDemo'

const Usage = (): JSX.Element => {
  return (
    <Router>
      <div className='usage'>
        <div style={{
          width: '350px',
          height: '100%',
        }}>
          <Navigation />
        </div>
        <RouterDemo />
      </div>

    </Router>
  )
}

export default Usage
