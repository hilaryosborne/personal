import React from 'react'
import _ from 'lodash'
import Radium from 'radium'
import * as resumeStyles from '../styles'
import * as baseStyles from 'scripts/styles'
import persona from 'config/persona'
import { Project } from './Project'

export class EntireComponent extends React.Component {
  getProjects () {
    return _.get(persona, 'projects', [])
  }

  render () {
    return (<div>
      <div className='row'>
        <div className='col col-12'>
          <h2 style={resumeStyles.typography.h2}>Projects Timeline<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
      {_.map(this.getProjects(), (project, k) => {
        return <Project key={k} project={project} />
      })}
    </div>)
  }
}

export const Entire = Radium(EntireComponent)
