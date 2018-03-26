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
          <h2 style={resumeStyles.typography.h2}>Project Timeline<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
      {_.map(this.getProjects(), (project, k) => {
        return <Project key={k} project={project} />
      })}
      <p style={{fontStyle: 'italic'}}>*Project time is represented by the project's starting year and the approximate number of active development hours performed to date. This is done as a great number of projects spanned a long period of time and often have numerous periods of active development and relative dormancy.</p>
    </div>)
  }
}

export const Entire = Radium(EntireComponent)
