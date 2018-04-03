import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { backgrounds } from 'scripts/styles'
import { SharedLogo } from './'
import { MenuToggle, Menu, MenuLink, MenuIcon } from 'components/Facade'

const styling = {
  el: {
    display: 'block',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0
  },
  attached: {
    position: 'absolute'
  },
  floating: {
    position: 'fixed',
    ...backgrounds.tomato
  }
}

@radium
export class Header extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      status: 'attached'
    }
    this.doScrollAction = this.doScrollAction.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.doScrollAction)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.doScrollAction)
  }

  doScrollAction () {
    const topOffset = window.pageYOffset
    if (this.state.status !== 'floating' && topOffset > 80) {
      this.doMakeFloating()
    } else if (this.state.status === 'floating' && topOffset < 80) {
      this.doMakeAttached()
    }
  }

  doMakeFloating () {
    const state = {...this.state}
    _.set(state, 'status', 'floating')
    this.setState(state)
  }

  doMakeAttached () {
    const state = {...this.state}
    _.set(state, 'status', 'attached')
    this.setState(state)
  }

  render () {
    return (<div style={{...styling.el, ...styling[this.state.status], ...this.props.style}} className={classnames(this.props.className)}>
      <div className='container p-2'>
        <div className='d-flex align-items-center'>
          <SharedLogo />
          <div className='ml-auto d-flex'>
            <MenuToggle />
            <Menu>
              <MenuLink to={'/'}>Home</MenuLink>
              <MenuLink to={'/projects'}>Projects</MenuLink>
              <MenuLink to={'/services'}>Services</MenuLink>
              <MenuIcon to={'https://github.com/hilaryosborne'} external><i className='fab fa-github' /></MenuIcon>
              <MenuIcon to={'https://github.com/hilaryosborne'} external><i className='fab fa-linkedin' /></MenuIcon>
              <MenuIcon to={'https://github.com/hilaryosborne'} external><i className='fab fa-steam' /></MenuIcon>
            </Menu>
          </div>
        </div>
      </div>
    </div>)
  }
}
