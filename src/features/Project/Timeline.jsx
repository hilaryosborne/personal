import _ from 'lodash'
import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {Container, Layer} from 'components/Facade'
import {SharedElevate} from 'components/Shared'
import {Stub} from 'components/Project'
import persona from 'config/persona'
import {backgrounds} from 'scripts/styles'

const styling = {
  layer: {
    ...backgrounds.white
  }
}

@radium
export class Timeline extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<Layer style={{...styling.layer, ...this.props.style}} className={classnames(this.props.className)}>
      <Container>
        <SharedElevate>
          {_.map(persona.projects, (project, k) => {
            return <Stub key={k} project={project} />
          })}
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
