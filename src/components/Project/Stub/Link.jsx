import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export class Link extends React.Component {
  static propTypes = {
    link: PropTypes.any
  }
  render () {
    return (<div className='d-block d-md-flex'>
      <div>
        <i className='fab fa-github mr-1' /> {_.get(this.props.link, 'label')}
      </div>
      <a href={_.get(this.props.link, 'url')} target='blank' className='ml-auto'>{_.get(this.props.link, 'url')}</a>
    </div>)
  }
}
