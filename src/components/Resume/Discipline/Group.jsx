import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as styles from '../styles'
import { Knowledge } from './Knowledge'

export class Group extends React.Component {
  static propTypes = {
    group: PropTypes.any
  }

  getKnowledge () {
    return _.get(this.props.group, 'knowledge', [])
  }

  render () {
    return (<div className='col col-12 col-md-6 mb-4 mb-md-0'>
      <h3 style={styles.typography.h3}>{_.get(this.props.group, 'label')}</h3>
      {_.map(this.getKnowledge(), (item, k) => {
        const last = k === (this.getKnowledge().length - 1)
        return <Knowledge key={k} data={item} last={last} />
      })}
    </div>)
  }
}
