import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
    const [currentCount, setCount] = React.useState(0)

    const heroContents = [
        'UI for vietnamese people using',
        'The next generation.',
        'First UI framework in Vietnam.'
    ]
    React.useEffect(() => {
        const timer = () => {
            setCount(currentCount + 1)
        }
        if (currentCount > heroContents.length - 1) {
            setCount(0)
        }
        const id = setInterval(timer, 4500)
        return () => clearInterval(id)
    }, [currentCount, heroContents.length])

    return (
        <div className="hero">
            <div className="hero__star"></div>
            {heroContents[currentCount]}
            <Link className="hero__linkExplore" to="/docs">
  Explore
            </Link>
        </div>
    )
}
export default Hero
