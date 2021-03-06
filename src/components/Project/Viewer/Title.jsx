import React from 'react'
import radium from 'radium'
import _ from 'lodash'
import PropType from 'prop-types'
import classnames from 'classnames'
import { H1, Underline } from 'components/Facade'
import {connect} from 'react-redux'

@radium
@connect(state => state)
export class Title extends React.Component {
  static propTypes = {
    project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={this.props.style}>
      <H1>
        <Underline>
          {_.get(this.props.project, 'viewing.project.label')}
        </Underline>
      </H1>
    </div>)
  }
}
