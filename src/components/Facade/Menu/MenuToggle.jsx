import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mediaQueryBelow } from 'scripts/styles'
import _ from 'lodash'

const styling = {
  el: {
    ...mediaQueryBelow('md', {
      fontSize: '1.6rem'
    })
  }
}

@connect(state => state)
@radium
export class MenuToggle extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }

  toggleEl

  constructor (props) {
    super(props)
    this.handleWindowClick = this.handleWindowClick.bind(this)
  }

  componentDidMount () {
    document.addEventListener('click', this.handleWindowClick)
  }

  getVisibility () {
    return _.get(this.props, 'facade.menu.toggle', false)
  }

  handleWindowClick (e) {
    if (!this.toggleEl) { return }
    if (this.getVisibility()) {
      this.props.dispatch({'type': 'FACADE_MENU_TOGGLE'})
    } else if (this.toggleEl.contains(e.target)) {
      this.props.dispatch({'type': 'FACADE_MENU_TOGGLE'})
    }
  }

  render () {
    return (<a
      ref={(el) => { this.toggleEl = el }}
      className={classnames('d-sm-none', this.props.className)}
      style={{...styling.el, ...this.props.style}}>
      <i className='fas fa-bars' />
    </a>)
  }
}
