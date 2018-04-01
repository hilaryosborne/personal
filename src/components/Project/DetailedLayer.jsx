import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Layer, Container } from 'components/Facade'
import { Title, FullSummary, Slider, Description } from './Content'
import { Navigation } from './Navigation'
import { backgrounds } from 'scripts/styles'

const styling = {
  layer: {
    ...backgrounds.white
  }
}

@radium
export class DetailedLayer extends React.Component {
  static propTypes = {
    project: PropType.any,
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
        <Title project={this.props.project} />
        <FullSummary project={this.props.project} />
        <Slider project={this.props.project} />
        <Description project={this.props.project} />
        <Navigation project={this.props.project} />
      </Container>
    </Layer>)
  }
}
