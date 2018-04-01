import React from 'react'
import _ from 'lodash'
import persona from 'config/persona'
import radium from 'radium'
import { Group } from './Group'
import * as resumeStyles from '../styles'
import * as baseStyles from 'scripts/styles'

const styles = {
  row: {
    marginBottom: '2.5rem',
    '@media (max-width: 768px)': {
      marginBottom: '0rem'
    }
  }
}

@radium
export class Entire extends React.Component {
  getRows () {
    return _.chunk(persona.disciplines, 2)
  }

  render () {
    return (<div>
      <div className='row'>
        <div className='col col-12'>
          <h2 style={resumeStyles.typography.h2}>Skills &amp; Knowledge<span style={baseStyles.underline.short} /></h2>
        </div>
      </div>
      {_.map(this.getRows(), (chunk, k) => {
        return (<div key={k} className='row' style={styles.row}>
          {_.map(chunk, (group, _k) => {
            return <Group key={_k} group={group} />
          })}
        </div>)
      })}
    </div>)
  }
}
