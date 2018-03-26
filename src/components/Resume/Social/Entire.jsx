import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import persona from 'config/persona'
import {Link} from './Link'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as resumeStyles from '../styles'

@Radium()
export class Entire extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    className: '',
    style: {}
  }

  getSocial () {
    return _.get(persona, 'personal.social', [])
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...this.props.style}}>
      <div className='row'>
        <div className='col col-12'>
          <h3 style={resumeStyles.typography.h3}>Find Me Online</h3>
        </div>
      </div>
      {_.map(this.getSocial(), (social, k) => {
        const last = k === (this.getSocial().length - 1)
        return <Link key={k} social={social} last={last} />
      })}
    </div>)
  }
}
