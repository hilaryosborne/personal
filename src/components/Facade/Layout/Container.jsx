import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class ContainerComponent extends React.Component {
    static propTypes = {
      style: PropTypes.any,
      children: PropTypes.any,
      className: PropTypes.string
    }
    render () {
      return (<div className={classnames('container', this.props.className)} style={[this.props.style]}>
        {this.props.children}
      </div>)
    }
}

export const Container = Radium(ContainerComponent)
