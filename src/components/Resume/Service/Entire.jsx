import React from 'react'
import Radium from 'radium'
import * as resumeStyles from '../styles'
import * as baseStyles from 'scripts/styles'
import persona from 'config/persona'
import _ from 'lodash'

@Radium()
export class Entire extends React.Component {
  getServices () {
    return _.get(persona, 'services', [])
  }

  render () {
    return (<div>
      <div className='row'>
        <div className='col col-12'>
          <h2 style={resumeStyles.typography.h2}>Hire Me<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
      {_.map(this.getServices(), (service, k) => {
        return (<div key={k} style={{marginBottom: '2.5rem'}}>
          <h4 className='d-flex'>{service.label} <div className='ml-auto'>{service.rate}/{service.unit}</div></h4>
          <div className='d-flex'>Lessons, Assessments, Marking, Mentorship <div className='ml-auto'>{service.availability}</div></div>
          <p className='mt-2'>I was contracted at Griffith to assist with the jQuery scripting for the new main Griffith website. My responsibilities involved development of the HTML/CSS, jQuery plugin development, third party jQuery plugin integration, social media integration, responsive design and some PHP development</p>
        </div>)
      })}
    </div>)
  }
}
