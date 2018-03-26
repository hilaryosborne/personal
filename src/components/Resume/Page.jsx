import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import * as base from 'scripts/styles'

const styles = {
  container: {
    ...base.backgrounds.white,
    marginTop: '4rem',
    marginBottom: '4rem',
    padding: '6rem 6rem 9rem 6rem',
    fontSize: '1.2rem',
    '@media print': {
      pageBreakAfter: 'always',
      fontSize: '1rem',
      padding: '1rem',
      background: 'none'
    }
  }
}

@Radium()
export class Page extends React.Component {
    static propTypes = {
      children: PropTypes.any
    }

    render () {
      return (<div className='container' style={styles.container}>
        {this.props.children}
      </div>)
    }
}
