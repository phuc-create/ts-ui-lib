import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Dashboard from './app/dashboard/Dashboard'
import Docs from './app/docs/Docs'
import Header from './app/layouts/Header'
const App = () => {
    return (
        <div className="ui-core">
            <Header />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/docs" exact component={Docs} />
            </Switch>
        </div>
    )
}

export default App
