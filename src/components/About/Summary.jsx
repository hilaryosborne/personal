import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { MarkDown } from 'components/Facade'
import persona from 'config/persona'

@radium
export class Summary extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...this.props.style}}>
      <MarkDown source={persona.career.about} />
    </div>)
  }
}
