import React from 'react'
import radium from 'radium'
import _ from 'lodash'
import PropType from 'prop-types'
import classnames from 'classnames'
import { H1 } from 'components/Facade'

@radium
export class Title extends React.Component {
  static propTypes = {
    project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    project: false,
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={[this.props.style]}>
      <H1>{_.get(this.props.project, 'data.label')}</H1>
    </div>)
  }
}
