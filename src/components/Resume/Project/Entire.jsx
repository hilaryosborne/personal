import React from 'react'
import Radium from 'radium'
import * as resumeStyles from '../styles'
import * as baseStyles from 'scripts/styles'

export class EntireComponent extends React.Component {
  render () {
    return (<div>
      <div className='row'>
        <div className='col col-12'>
          <h2 style={resumeStyles.typography.h2}>Projects<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
    </div>)
  }
}

export const Entire = Radium(EntireComponent)
