import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds } from 'scripts/styles'
import { Layer, Container, Row, Col } from 'components/Facade'
import { SocialLink } from 'components/Social'
import _ from 'lodash'
import persona from 'config/persona'

const styling = {
  layer: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
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

  getFeatured () {
    return _.filter(_.get(persona, 'personal.social', []), {featured: true})
  }

  render () {
    return (<Layer className={classnames(this.props.className)} style={{...styling.layer, ...this.props.style}}>
      <Container>
        <Row>
          {_.map(this.getFeatured(), (social, k) => {
            return (<Col key={k} md={6}>
              <SocialLink social={social} />
            </Col>)
          })}
        </Row>
      </Container>
    </Layer>)
  }
}
