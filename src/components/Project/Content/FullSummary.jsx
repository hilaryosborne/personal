import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Row, Col, H3, Lead } from 'components/Facade'
import { Tags } from './Tags'
import {connect} from 'react-redux'

@radium
@connect(state => state)
export class FullSummary extends React.Component {
  static propTypes = {
    project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getSummary () {
    const summary = _.get(this.props.project, 'viewing.project.summary', '')
    if (typeof summary === 'string') {
      return summary
    } else {
      return summary.join(' ')
    }
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...this.props.style}}>
      <Row className='mb-3'>
        <Col md='12'>
          <Lead>{_.get(this.props.project, 'viewing.project.blurb')}</Lead>
        </Col>
      </Row>
      <Row>
        <Col md={'7'}>
          {this.getSummary()}
        </Col>
        <Col md={'5'}>
          <H3 className='mb-3'>What was involved</H3>
          <Tags />
        </Col>
      </Row>
    </div>)
  }
}
