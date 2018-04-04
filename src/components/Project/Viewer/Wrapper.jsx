import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { mediaQueryBelow } from 'scripts/styles'

const styling = {
  mobile: {
    position: 'relative',
    display: 'block',
    width: '21rem',
    height: '41rem',
    backgroundImage: 'url(/media/projects/device_mobile.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    ...mediaQueryBelow('md', {
      width: '70%',
      border: '1px #000 solid',
      backgroundImage: 'none',
      height: '30rem'
    })
  },
  laptop: {
    position: 'relative',
    display: 'block',
    width: '48.2rem',
    height: '30.3rem',
    backgroundImage: 'url(/media/projects/device_laptop.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    ...mediaQueryBelow('md', {
      width: '70%',
      border: '1px #000 solid',
      backgroundImage: 'none',
      height: '30rem'
    })
  }
}

@radium
export class Wrapper extends React.Component {
  static propTypes = {
    device: PropType.string,
    children: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...styling[this.props.device], ...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
