import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Row, Col } from 'components/Facade'

@radium
export class Navigation extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div style={{...this.props.style}} className={classnames(this.props.className)}>
      <Row>
        <Col md='4' className='text-left'>
          <Link to='/projects'>Previous Project</Link>
        </Col>
        <Col md='4' className='text-center'>
          <Link to='/projects'>View All Projects</Link>
        </Col>
        <Col md='4' className='text-right'>
          <Link to='/projects'>Next Project</Link>
        </Col>
      </Row>
    </div>)
  }
}
