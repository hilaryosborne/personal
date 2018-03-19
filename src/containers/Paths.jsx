import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'scripts/store'
import { NotFound } from 'containers'
import { Resume } from './Resume'
import { StyleRoot } from 'radium'

export class Paths extends React.Component {
  render () {
    return (<StyleRoot><Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
    </StyleRoot>)
  }
}
