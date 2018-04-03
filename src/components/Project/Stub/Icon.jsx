import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropType from 'prop-types'

const styling = {
  container: {
    position: 'relative'
  },
  primary: {
    fontSize: '1.3rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  background: {
    fontSize: '3rem'
  }
}

@radium
export class Icon extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div style={{...styling.container, ...this.props.style}} className={classnames(this.props.className)}>
      <i className='fas fa-code' style={{...styling.primary}} />
      <i className='far fa-circle' style={{...styling.background}} />
    </div>)
  }
}
