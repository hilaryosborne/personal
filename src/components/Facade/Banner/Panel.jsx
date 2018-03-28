import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const styling = {
  core: {
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  themes: {
    full: {
      height: '100vh'
    }
  }
}

@Radium
export class Panel extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    theme: 'full'
  }

  render () {
    return (<div className={classnames('banner-panel', this.props.className)} style={{...styling.core, ...styling.themes[this.props.theme], ...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
