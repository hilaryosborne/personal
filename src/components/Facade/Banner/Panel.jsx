import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {mediaQueryBelow} from 'scripts/styles'

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
      maxHeight: '50rem',
      ...mediaQueryBelow('md', {
        paddingTop: '8rem',
        paddingBottom: '3.5rem',
        height: 'auto'
      })
    },
    half: {
      height: '50vh',
      ...mediaQueryBelow('md', {
        paddingTop: '8rem',
        paddingBottom: '3.5rem',
        height: 'auto'
      })
    }
  }
}

@radium
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
