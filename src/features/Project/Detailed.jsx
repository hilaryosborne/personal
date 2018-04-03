import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { backgrounds } from 'scripts/styles'
import { Layer, Container } from 'components/Facade'
import { SharedElevate } from 'components/Shared'
import { Navigation, Description, Summary, Slider, Title } from 'components/Project'

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
export class Detailed extends React.Component {
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
    return (<Layer className={classnames(this.props.className)} style={{...styling.layer, ...this.props.style}}>
      <Container>
        <SharedElevate>
          <Title style={{marginBottom: '1rem'}} />
          <Summary />
          <Slider style={{...styling.spacing}} />
          <Description style={{...styling.spacing}} />
          <Navigation style={{...styling.spacing}} />
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
