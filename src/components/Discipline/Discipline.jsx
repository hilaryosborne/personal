import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { H3 } from 'components/Facade'
import { Knowledge } from './Knowledge'

@radium
export class Discipline extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    discipline: PropTypes.any
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getKnowledge () {
    return _.get(this.props.discipline, 'knowledge', [])
  }

  render () {
    return (<div style={{...this.props.style}} className={classnames(this.props.className)}>
      <H3>{_.get(this.props.discipline, 'label')}</H3>
      {_.map(this.getKnowledge(), (item, k) => {
        const last = k === (this.getKnowledge().length - 1)
        return <Knowledge key={k} data={item} last={last} />
      })}
    </div>)
  }
}
