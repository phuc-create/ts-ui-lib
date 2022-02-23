/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ButtonDemo from 'components/ButtonDemo'
import FormDemo from 'components/FormDemo'
import FormChoseField from 'components/ChooseFieldDemo'
import { Route, Switch } from 'react-router-dom'
import CardDemo from 'components/CardDemo'
import AdvancedCardDemo from 'components/AdvancedCardDemo'
import NofiDemo from 'components/NofiDemo'
import SwitchButtonDemo from 'components/SwitchButtonDemo'

const RouterDemo = (): JSX.Element => {
  const configRouter = [
    {
      id: 1,
      path: '/usage/button',
      component: ButtonDemo
    },
    {
      id: 2,
      path: '/usage/form',
      component: FormDemo
    }
  ]
  return (
    <div className='show-demo'>
      <Switch>
        {/* {
            configRouter.map(route => {
              <Route path={route.path} exact component={route.component} />
            })
          } */}
        {/* <Route path="/usage/*" component={ButtonDemo} /> */}
        <Route path="/usage/button" component={ButtonDemo} />
        <Route path="/usage/form" component={FormDemo} />
        <Route path="/usage/chose-field" component={FormChoseField} />
        <Route path="/usage/card" component={CardDemo} />
        <Route path="/usage/card-advanced" component={AdvancedCardDemo} />
        <Route path="/usage/notification" component={NofiDemo} />
        <Route path="/usage/switch" component={SwitchButtonDemo} />

      </Switch>
    </div>
  )
}

export default RouterDemo
