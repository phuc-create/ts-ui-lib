import React from 'react'
import ButtonDemo from 'components/ButtonDemo'
import FormDemo from 'components/FormDemo'
import { Route, Switch } from 'react-router-dom'

const RouterDemo = () => {
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

      </Switch>
    </div>
  )
}

export default RouterDemo
