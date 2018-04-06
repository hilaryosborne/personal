import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Layer, Container } from 'components/Facade'
import { Title, Summary } from 'components/About'
import { ResumeLink } from 'components/Resume'
import { mediaQueryBelow, backgrounds } from 'scripts/styles'

const styling = {
  layer: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    ...backgrounds.darkslategray,
    ...mediaQueryBelow('md', {
      paddingTop: '1rem',
      paddingBottom: '1rem'
    })
  },
  spacing: {
    marginTop: '2rem',
    ...mediaQueryBelow('md', {
      marginTop: '1rem'
    })
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
