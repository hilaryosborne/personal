import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { typography } from 'scripts/styles'

const styling = {
  el: {
    ...typography.lead
  },
  link: {
    fontWeight: 'bold',
    color: '#FFF'
  }
}

@radium
export class Link extends React.Component {
  static propTypes = {
    social: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames('text-center', this.props.className)} style={{...styling.el, ...this.props.style}}>
      <p className='mb-1'>{_.get(this.props.social, 'display_label')} <i className={classnames('mx-1', _.get(this.props.social, 'icon'))} /> {_.get(this.props.social, 'type')}</p>
      <a href={_.get(this.props.social, 'url')} target='_blank' rel='noopener noreferrer' style={{...styling.link}}>{_.get(this.props.social, 'display_url')}</a>
    </div>)
  }
}
