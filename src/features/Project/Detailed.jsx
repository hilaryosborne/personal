import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { backgrounds } from 'scripts/styles'
import { Layer, Container } from 'components/Facade'
import { SharedElevate } from 'components/Shared'
import { Navigation, Description, Summary, Slider, Title } from 'components/Project'

const styling = {
  base: {
    ...backgrounds.white
  }
}

@radium
export class Detailed extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<Layer className={classnames(this.props.className)} style={{...styling.base, ...this.props.style}}>
      <Container>
        <SharedElevate>
          <Title className='mb-3 mb-md-3' />
          <Summary className='mb-4 mb-md-5' />
          <Slider className='mb-4' />
          <Description />
          <Navigation />
        </SharedElevate>
      </Container>
    </Layer>)
  }
}
