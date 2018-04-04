import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds } from 'scripts/styles'
import { Layer, Container, H3, H2 } from 'components/Facade'
import _ from 'lodash'
import persona from 'config/persona'

const styling = {
  layer: {
    ...backgrounds.white
  },
  highlight: {
    padding: '1rem',
    border: '1px #000 dashed'
  }
}

@radium
@connect(state => state)
export class Catalog extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<Layer className={classnames(this.props.className)} style={{...styling.layer, ...this.props.style}}>
      <Container>
        <H2>Professional Services</H2>
        <p>My main focus is web development. I started off doing backend web development using PHP (waaaay back in 2003) but now I spend most of my time working on ReactJS. I am not restricted to just programming however! In addition to web development I am happy to provide consultation on scoping, conceptualisation, creative and sky's the limit brain storming.</p>
        <div style={{...styling.highlight}}>
          {_.map(persona.services, (service, k) => {
            return (<div key={k} style={{marginBottom: k === (persona.services.length - 1) ? '0' : '1rem'}}>
              <H3 className='d-flex'>{service.label} <div className='ml-auto'>{service.rate}/{service.unit}</div></H3>
              <div className='d-flex'>
                {service.includes.join(', ')} <div className='ml-auto'>{service.availability}</div>
              </div>
            </div>)
          })}
        </div>
      </Container>
    </Layer>)
  }
}
