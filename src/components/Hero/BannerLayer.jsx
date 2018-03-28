import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FacadeLayer } from 'components'

@Radium
export class BannerLayer extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string
  }
  render () {
    return (<FacadeLayer className={classnames('hero-layer', this.props.className)} style={[this.props.style]}>
      {this.props.children}
    </FacadeLayer>)
  }
}
