import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {connect} from 'react-redux'

@radium
@connect(state => state)
export class Description extends React.Component {
  static propTypes = {
    project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getFormatted () {
    const description = _.get(this.props.project, 'viewing.project.description', '')
    if (typeof description === 'string') {
      return description
    } else {
      return description.join(' ')
    }
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...this.props.style}}>
      {this.getFormatted()}
    </div>)
  }
}
