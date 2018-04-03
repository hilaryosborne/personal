import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds } from 'scripts/styles'
import { Layer, Container, Row, Col } from 'components/Facade'
import { SharedElevate } from 'components/Shared'
import _ from 'lodash'
import persona from 'config/persona'
import { Discipline } from 'components/Discipline'

const styling = {
  layer: {
    ...backgrounds.white
  },
  spacing: {
    marginTop: '3rem'
  }
}

@radium
@connect(state => state)
export class Bulletin extends React.Component {
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
        <SharedElevate>
          {_.map(this.getRows(), (chunk, k) => {
            return (<Row key={k} style={{marginBottom: '2.5rem'}}>
              {_.map(chunk, (discipline, _k) => {
                return <Col key={_k} md='6'>
                  <Discipline key={_k} discipline={discipline} />
                </Col>
              })}
            </Row>)
          })}
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
