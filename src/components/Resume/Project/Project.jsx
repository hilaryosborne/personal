import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Title } from './Title'
import { Time } from './Time'
import { Tags } from './Tags'
import { Link } from './Link'
import { Summary } from './Summary'

export class Project extends React.Component {
    static propTypes = {
      project: PropTypes.any
    }
    render () {
      return (<div style={{marginBottom: '3rem'}}>
        <Title project={this.props.project} />
        <div className='d-flex'>
          <Tags project={this.props.project} />
          <Time project={this.props.project} />
        </div>
        <Summary project={this.props.project} className='mt-4' />
        {_.get(this.props.project, 'links', []).length > 0 ? <div className='links mt-4'>
          {_.map(_.get(this.props.project, 'links'), (link, k) => {
            return <Link key={k} link={link} />
          })}
        </div> : null}
      </div>)
    }
}
