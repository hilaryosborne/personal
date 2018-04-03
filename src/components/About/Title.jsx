import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { H1 } from 'components/Facade'

@radium
export class Title extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<H1 className={classnames(this.props.className)} style={{...this.props.style}}>ReactJS, WordPress,<br />Laravel, Symfony + More</H1>)
  }
}
