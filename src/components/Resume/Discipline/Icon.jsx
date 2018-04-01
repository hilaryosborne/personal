import React from 'react'
import radium from 'radium'
import _ from 'lodash'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const tags = {
  cando: { label: 'Yup! Can Do', className: 'far fa-check-circle' },
  oldguard: { label: 'Worked with for donkey\'s years', className: 'fas fa-crosshairs' },
  passionate: { label: 'Current Passion', className: 'fas fa-fire' }
}

@radium()
export class Icon extends React.Component {
  static propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    tag: 'cando',
    className: '',
    style: {}
  }

  getLabel () {
    return _.get(tags, '[' + this.props.tag + '].label')
  }

  getClassName () {
    return _.get(tags, '[' + this.props.tag + '].className')
  }

  render () {
    return <i style={this.props.style} title={this.getLabel()} className={classnames(this.props.className, this.getClassName())} />
  }
}
