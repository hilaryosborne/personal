import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Btn } from 'components/Facade'
import {withRouter} from 'react-router-dom'

const styling = {
  icon: {
    position: 'absolute',
    top: '50%',
    left: '1.2rem',
    transform: 'translateY(-50%)'
  }
}

@radium
@withRouter
export class Link extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction (e) {
    e.preventDefault()
    this.props.history.push('/resume')
  }

  render () {
    return (<Btn type='primary' block onClick={this.doClickAction} className={classnames(this.props.className)} style={{...this.props.style}}>
      <i className='fas fa-download' style={{...styling.icon}} /> View My Printable Resume
    </Btn>)
  }
}
