import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navigation = (): JSX.Element => {

  return (
    <div className='nav-demo'>
      <ul>
        <li>
          <Link to="/usage/button">Button</Link>
          <span className='icon-right'><AiOutlineDoubleRight /></span>
        </li>
        <li>
          <Link to="/usage/form">Form</Link>
          <span className='icon-right'><AiOutlineDoubleRight /></span>
        </li>
        <li>
          <Link to="/usage/chose-field">Chose Field</Link>
          <span className='icon-right'><AiOutlineDoubleRight /></span>
        </li>
        <li>
          <Link to="/usage/card">Card</Link>
          <span className='icon-right'><AiOutlineDoubleRight /></span>
        </li>
        <li>
          <Link to="/usage/card-advanced">Advanced Card</Link>
          <span className='icon-right'><AiOutlineDoubleRight /></span>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
