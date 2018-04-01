import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

@radium
@connect(state => state)
export class MenuToggle extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction () {
    this.props.dispatch({'type': 'FACADE_MENU_SHOW'})
  }

  render () {
    return (<a
      onClick={this.doClickAction}
      className={classnames('d-block d-sm-none', this.props.className)}
      style={{...this.props.style}}>
      <i className='fas fa-bars' />
    </a>)
  }
}
