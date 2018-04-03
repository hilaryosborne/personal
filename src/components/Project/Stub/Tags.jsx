import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export class Tags extends React.Component {
  static propTypes = {
    project: PropTypes.any
  }

  getTags () {
    const tags = _.get(this.props.project, 'tags', [])
    const disciplines = _.get(this.props.project, 'disciplines', [])
    return _.concat(tags, disciplines)
  }

  render () {
    return (<div>{this.getTags().join(', ')}</div>)
  }
}
