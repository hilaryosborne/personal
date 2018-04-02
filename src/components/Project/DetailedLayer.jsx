import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Layer, Container } from 'components/Facade'
import { SharedElevate } from 'components/Shared'
import { Title, FullSummary, Slider, Description } from './Content'
import { Navigation } from './Navigation'
import { backgrounds } from 'scripts/styles'
import {connect} from 'react-redux'

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
        <SharedElevate>
          <Title style={{marginBottom: '1rem'}} />
          <FullSummary />
          <Slider style={{...styling.spacing}} />
          <Description style={{...styling.spacing}} />
          <Navigation style={{...styling.spacing}} />
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
