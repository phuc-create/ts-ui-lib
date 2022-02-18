import React from 'react'
interface BtnProps {
    value: any
}
const Button: React.FC<BtnProps> = ({ value }) => {
    return (
        <button className="button__primary">
            {value}
        </button>
    )
}

export default Button
