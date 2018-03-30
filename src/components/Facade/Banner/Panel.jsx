import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const styling = {
  core: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '25rem'
  },
  sizes: {
    adapt: {
      height: 'auto'
    },
    full: {
      height: '100vh',
      maxHeight: '70rem'
    },
    half: {
      height: '50vh'
    }
  }
}

@Radium
export class Panel extends React.Component {
  static propTypes = {
    img: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    banner: true,
    type: 'full'
  }

  render () {
    return (<div className={classnames('banner-panel d-flex', this.props.className)} style={{
      ...styling.core,
      ...styling.sizes[this.props.size],
      backgroundImage: `url(${this.props.img})`,
      ...this.props.style
    }}>
      {this.props.children}
    </div>)
  }
}
