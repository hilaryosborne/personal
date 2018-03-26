import React from 'react'
import Radium from 'radium'
import * as resumeStyles from '../styles'
import * as baseStyles from 'scripts/styles'

@Radium()
export class Entire extends React.Component {
  render () {
    return (<div>
      <div className='row'>
        <div className='col col-12'>
          <h2 style={resumeStyles.typography.h2}>Connect With Me<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
      <div className='row'>
        <div className='col col-12 col-md-4 text-center'>
          <p>Linked up with me at steam</p>
          <a href=''>http://steamcommunity.com/id/sackrin</a>
        </div>
        <div className='col col-12 col-md-4 text-center'>
          <p>Linked up with me at steam</p>
          <a href=''>http://steamcommunity.com/id/sackrin</a>
        </div>
        <div className='col col-12 col-md-4 text-center'>
          <p>Linked up with me at steam</p>
          <a href=''>http://steamcommunity.com/id/sackrin</a>
        </div>
      </div>
    </div>)
  }
}
