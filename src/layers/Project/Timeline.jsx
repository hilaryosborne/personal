import _ from 'lodash'
import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {Container, H1, Underline} from 'components/Facade'
import {SharedElevate} from 'components/Shared'
import {Stub} from 'components/Project'
import persona from 'config/persona'

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
    return (<div style={{...this.props.style}} className={classnames(this.props.className)}>
      <SharedElevate>
        <Container>
          <H1>
            <Underline>
              Project Timeline
            </Underline>
          </H1>
          {_.map(persona.projects, (project, k) => {
            return <Stub key={k} project={project} />
          })}
        </Container>
      </SharedElevate>
    </div>)
  }
}
