import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {Container} from 'components/Facade'
import {SharedElevate} from 'components/Shared'

@radium
export class TimelineLayer extends React.Component {
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
          Hey There
        </Container>
      </SharedElevate>
    </div>)
  }
}
