import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'scripts/store'
import { NotFound } from 'containers'
import { Resume } from './Resume'
import { Home } from './Home'
import { StyleRoot, Style } from 'radium'
import { backgrounds, typography } from 'scripts/styles'

const styling = {
  'html, body': {...backgrounds.tomato, ...typography.body},
  '@page': {
    margin: '2cm 1cm'
  },
  'mediaQueries': {
    'print': {
      'html, body': {
        background: 'none'
      }
    },
    '(max-width: 768px)': {
      'html, body': {
        fontSize: '13px'
      }
    }
  },
  h1: {...typography.h1},
  h2: {...typography.h2},
  h3: {...typography.h3}
}

export class Paths extends React.Component {
  render () {
    return (<StyleRoot>
      <Style rules={styling} />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </StyleRoot>)
  }
}
