import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as styles from '../styles'
import { Knowledge } from './Knowledge'

export class Group extends React.Component {
  static propTypes = {
    group: PropTypes.any
  }

  render () {
    return (<div className='col col-12 col-md-6'>
      <h3 style={styles.typography.h3}>{_.get(this.props.group, 'label')}</h3>
      {_.map(_.get(this.props.group, 'knowledge', []), (item, k) => {
        return <Knowledge key={k} data={item} />
      })}
    </div>)
  }
}
