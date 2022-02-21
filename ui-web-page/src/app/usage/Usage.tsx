import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import RouterDemo from './RouterDemo'

const Usage = (): JSX.Element => {
  return (
    <Router>
      <div className='usage'>
        <div>
          <Navigation />
        </div>
        <RouterDemo />
      </div>

    </Router>
  )
}

export default Usage
