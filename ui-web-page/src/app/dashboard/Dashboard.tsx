import React from 'react'
import Colorful from './Colorful'
import './Dashboard.scss'
import Hero from './Hero'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
const Dashboard = () => {
    return (
        <div className="main">
            <Hero />
            <Introduction />
            <Colorful />
            <Portfolio />
        </div>
    )
}

export default Dashboard



