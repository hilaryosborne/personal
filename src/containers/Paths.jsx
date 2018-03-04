import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'scripts/store'
import { Home, NotFound } from 'containers'

export class Paths extends React.Component {
  render () {
    return (<Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>)
  }
}
