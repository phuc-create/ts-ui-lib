import React from 'react'
import RouterApp from '../router/RouterApp'
import VietNamFlag from '../../images/vietnam.png'

function Header(): JSX.Element {
    return (
        <header className="container">
            <div className="container__logo">
                Vi-UI{' '}
                <img
                    className="container__logo-img"
                    src={VietNamFlag}
                    alt="hello world" />
            </div>
            <div className="container__link">
                <RouterApp />
            </div>
        </header>
    )
}

export default Header
