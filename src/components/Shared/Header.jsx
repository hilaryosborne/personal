import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { backgrounds, mediaQueryBelow } from 'scripts/styles'
import { SharedLogo } from './'
import { MenuToggle, Menu, MenuRouteLink, MenuDivider } from 'components/Facade'
import { SocialMenuIcons } from 'components/Social'

const styling = {
  el: {
    display: 'block',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    ...mediaQueryBelow('md', {
      position: 'fixed',
      ...backgrounds.tomato
    })
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
      <div className='container p-3 p-md-2'>
        <div className='d-flex align-items-center'>
          <SharedLogo />
          <div className='ml-auto d-flex'>
            <MenuToggle />
            <Menu>
              <MenuRouteLink to={'/'} className='px-3 py-2 py-md-0'>Home</MenuRouteLink>
              <MenuRouteLink to={'/projects'} className='px-3 py-2 py-md-0'>Projects</MenuRouteLink>
              <MenuRouteLink to={'/services'} className='px-3 py-2 py-md-0'>Services</MenuRouteLink>
              <MenuDivider className='d-block d-md-none' />
              <SocialMenuIcons />
            </Menu>
          </div>
        </div>
      </div>
    </div>)
  }
}
