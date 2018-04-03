import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds } from 'scripts/styles'
import { Layer, Container, Row, Col } from 'components/Facade'
import _ from 'lodash'
import persona from 'config/persona'

const styling = {
  layer: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    ...backgrounds.tomato
  },
  spacing: {
    marginTop: '3rem'
  }
}

@radium
@connect(state => state)
export class Browse extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getRows () {
    return _.chunk(persona.disciplines, 2)
  }

  render () {
    return (<Layer className={classnames(this.props.className)} style={{...styling.layer, ...this.props.style}}>
      <Container>
        <Row>
          <Col md={6}>
            <div className='text-center'>
              <p className='mb-1'>Link up with me at <i className='fab fa-linkedin mx-1' /> linkedin</p>
              <a href='' style={{fontWeight: 'bold', color: '#FFF'}}>github.com/hilaryosborne</a>
            </div>
          </Col>
          <Col md={6}>
            <div className='text-center'>
              <p className='mb-1'>Link up with me at <i className='fab fa-linkedin mx-1' /> github</p>
              <a href='' style={{fontWeight: 'bold', color: '#FFF'}}>linkedin.com/in/hilaryosborne</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Layer>)
  }
}
