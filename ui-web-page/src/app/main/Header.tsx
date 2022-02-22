import React from 'react'
import RouterApp from '../router/RouterApp'
import Minions2 from '../../images/minion2.png'

function Header(): JSX.Element {
    return (
        <header className="container">
            <div className="container__logo">
                Minions-UI{' '}
                <img
                    className="container__logo-img"
                    src={Minions2}
                    alt="hello world" />
            </div>
            <div className="container__link">
                <RouterApp />
            </div>
        </header>
    )
}

export default Header
