import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Layer, Container } from 'components/Facade'
import { Title, FullSummary, Slider, Description } from './Content'
import { Navigation } from './Navigation'
import { backgrounds } from 'scripts/styles'
import {connect} from 'react-redux'

const styling = {
  layer: {
    ...backgrounds.white
  },
  spacing: {
    marginTop: '2rem'
  }
}

@radium
@connect(state => state)
export class DetailedLayer extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    project: false,
    style: {},
    className: ''
  }

  render () {
    return (<Layer className={classnames('project-detailed-layer', this.props.className)} style={{...styling.layer, ...this.props.style}}>
      <Container>
        <div style={{...backgrounds.white, position: 'relative', padding: '.6rem 1.5rem', margin: '-3.5rem -1.5rem 0 -1.5rem'}}>
          <Title style={{marginBottom: '1rem'}} />
          <FullSummary />
          <Slider style={{...styling.spacing}} />
          <Description style={{...styling.spacing}} />
          <Navigation style={{...styling.spacing}} />
        </div>
      </Container>
    </Layer>)
  }
}
