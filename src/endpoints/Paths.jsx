import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'scripts/store'
import { NotFound } from './NotFound'
import { Resume } from './Resume'
import { Project } from './Project'
import { Services } from './Services'
import { Home } from './Home'
import { Projects } from './Projects'
import { LayoutSpacing } from 'components/Layout'
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
      <LayoutSpacing />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/services' component={Services} />
            <Route path='/projects/:slug' component={Project} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </StyleRoot>)
  }
}
