import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {Tag} from './Tag'
import { Row, Col } from 'components/Facade'
import {connect} from 'react-redux'
import _ from 'lodash'

@radium
@connect(state => state)
export class Tags extends React.Component {
  static propTypes = {
    project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getTags () {
    const tags = _.get(this.props.project, 'viewing.project.tags', [])
    const disciplines = _.get(this.props.project, 'viewing.project.disciplines', [])
    return _.concat(tags, disciplines)
  }

  getChunked () {
    const tags = this.getTags()
    return _.chunk(tags, tags.length / 2)
  }

  render () {
    return (<div className={classnames(this.props.className)} style={this.props.style}>
      <Row>
        {_.map(this.getChunked(), (tags, k) => {
          return (<Col key={k} md='6'>
            {_.map(tags, (tag, _k) => {
              return (<Tag key={_k} className='mb-1'>{tag}</Tag>)
            })}
          </Col>)
        })}
      </Row>
    </div>)
  }
}
