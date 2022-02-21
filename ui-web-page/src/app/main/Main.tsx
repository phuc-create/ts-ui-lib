import React from 'react'
import Colorful from './Colorful'
import './Main.scss'
import Hero from './Hero'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
const Main = () => {
    return (
        <div className="main">
            <Hero />
            <Introduction />
            <Colorful />
            <Portfolio />
        </div>
    )
}

export default Main



