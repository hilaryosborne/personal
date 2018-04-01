import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Row, Col, H3 } from 'components/Facade'
import { Tags } from './Tags'

@radium
export class FullSummary extends React.Component {
  static propTypes = {
    // project: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    // project: false,
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames(this.props.className)} style={[this.props.style]}>
      <Row>
        <Col md='12'>
            Working onsite at DTH media’s offices in New Farm, I worked on creating a modern set of digital tools for this Brisbane based startup.
        </Col>
      </Row>
      <Row>
        <Col md={'8'}>
            The requirements of the DTH Media project were to create a modern public facing sales website along with a sales portal aimed at providing an online ordering process for geo printed marketing campaigns. A number of different technologies were used such as WordPress, NodeJS + ReactJS, mongoDB and Google Maps API. The result was an intuitive web platform that allowed for distributions areas to be planned and displayed within google maps for complete user self service.
        </Col>
        <Col md={'4'}>
          <H3>What was involved</H3>
          <Tags />
        </Col>
      </Row>
    </div>)
  }
}
