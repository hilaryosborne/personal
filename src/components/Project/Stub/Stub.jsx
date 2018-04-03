import React from 'react'
import PropTypes from 'prop-types'
import radium from 'radium'
import _ from 'lodash'
import { Title } from './Title'
import { Time } from './Time'
import { Tags } from './Tags'
import { Link } from './Link'
import { Summary } from './Summary'

const styling = {
  wrapper: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    '@media print': {
      pageBreakInside: 'avoid'
    }
  }
}

@radium
export class Stub extends React.Component {
    static propTypes = {
      project: PropTypes.any
    }

    render () {
      return (<div style={{...styling.wrapper}} className='d-flex align-items-center' >
        <div style={{marginRight: '2.5rem', marginLeft: '1.5rem'}}>
          <div style={{position: 'relative'}}>
            <i className='fas fa-code' style={{fontSize: '1.3rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
            <i className='far fa-circle' style={{fontSize: '3rem'}} />
          </div>
        </div>
        <div>
          <Title project={this.props.project} />
          <div className='d-block d-md-flex mt-2'>
            <Tags project={this.props.project} />
            <Time project={this.props.project} />
          </div>
          <Summary project={this.props.project} className='mt-2' />
          {_.get(this.props.project, 'links', []).length > 0 ? <div className='links mt-2'>
            {_.map(_.get(this.props.project, 'links'), (link, k) => {
              return <Link key={k} link={link} />
            })}
          </div> : null}
        </div>
      </div>)
    }
}
