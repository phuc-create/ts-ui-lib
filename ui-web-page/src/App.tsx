import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Main from 'app/main/Main'
import Docs from 'app/docs/Docs'
import Header from 'app/main/Header'
import Usage from 'app/usage/Usage'
import { ColorsProvider } from 'minions-lib'
const App = () => {
    return (
        <div className="ui-core">
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/docs" exact component={Docs} />
                <Route path="/usage" exact component={Usage} />
            </Switch>
        </div>

    )
}

export default App
