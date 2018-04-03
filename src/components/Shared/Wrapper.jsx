import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { SharedHeader } from './'
import { AboutCover } from 'features/About'
import { SocialBrowse } from 'features/Social'

@radium
export class Wrapper extends React.Component {
  static propTypes = {
    children: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div
      style={{...this.props.style}}
      className={classnames(this.props.className)}>
      <SharedHeader />
      {this.props.children}
      <SocialBrowse />
      <AboutCover />
      <div>Footer</div>
    </div>)
  }
}
