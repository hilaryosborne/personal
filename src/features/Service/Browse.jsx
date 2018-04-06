import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds, mediaQueryBelow } from 'scripts/styles'
import { Layer, Container, Row, Col } from 'components/Facade'
import { SharedElevate } from 'components/Shared'
import _ from 'lodash'
import persona from 'config/persona'
import { Discipline } from 'components/Discipline'

const styling = {
  layer: {
    ...backgrounds.white
  },
  row: {
    marginBottom: '1.5rem',
    ...mediaQueryBelow('md', {
      marginBottom: '0'
    })
  },
  item: {
    ...mediaQueryBelow('md', {
      marginBottom: '1.5rem'
    })
  }
}

@connect(state => state)
@radium
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
        <SharedElevate>
          {_.map(this.getRows(), (chunk, k) => {
            return (<Row key={k} style={{...styling.row}}>
              {_.map(chunk, (discipline, _k) => {
                return <Col key={_k} md='6'>
                  <Discipline key={_k} discipline={discipline} style={{...styling.item}} />
                </Col>
              })}
            </Row>)
          })}
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
