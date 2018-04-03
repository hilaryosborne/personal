import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import {Link} from 'react-router-dom'

export class Summary extends React.Component {
  static propTypes = {
    project: PropTypes.any,
    className: PropTypes.string
  }

  getSummary () {
    const summary = _.get(this.props.project, 'summary')
    if (typeof summary === 'string') {
      return summary
    } else {
      return summary.join(' ')
    }
  }

  getLink () {
    if (!this.props.project.slug) { return null }
    return <Link to={'/projects/' + this.props.project.slug}>[READ MORE]</Link>
  }

  render () {
    return (_.get(this.props.project, 'summary') ? <div className={classnames(this.props.className)}>
      <i className='fas fa-quote-left mr-1' /> {this.getSummary()} {this.getLink()}
    </div> : null)
  }
}
