import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { backgrounds } from 'scripts/styles'
import { Layer, Container } from 'components/Facade'
import { Title, Summary } from 'components/About'
import { ResumeLink } from 'components/Resume'

const styling = {
  layer: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    ...backgrounds.darkslategray
  },
  spacing: {
    marginTop: '2rem'
  }
}

@radium
export class Cover extends React.Component {
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
        <Title />
        <Summary style={{...styling.spacing}} />
        <ResumeLink style={{...styling.spacing}} />
      </Container>
    </Layer>)
  }
}
