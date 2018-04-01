import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'

@radium
export class Description extends React.Component {
  static propTypes = {
    // project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    // project: false,
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={[this.props.style]}>
      Component
    </div>)
  }
}
