import React from 'react'

import { Link } from 'react-router-dom'

// import Dashboard from '../dashboard/Dashboard'

const RouterApp = () => {
    return (
        <>
            <Link className="container__link--l" to="/">
        Home
            </Link>

            <Link className="container__link--l" to="/docs">
        Docs
            </Link>

            <Link className="container__link--l" to="/usage">
        Usage
            </Link>

            <a
                className="container__link--l"
                href="https://github.com/phuc-create/ui-web-page"
            >
        GitHub 🔥
            </a>
        </>
    )
}

export default RouterApp
