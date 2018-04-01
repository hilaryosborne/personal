import React from 'react'
import PropTypes from 'prop-types'
import radium from 'radium'
import * as base from 'scripts/styles'

const styles = {
  container: {
    ...base.backgrounds.white,
    marginTop: '4rem',
    marginBottom: '4rem',
    padding: '6rem 6rem 9rem 6rem',
    fontSize: '1.2rem',
    '@media (max-width: 768px)': {
      padding: '1rem',
      marginTop: '0',
      marginBottom: '0'
    },
    '@media print': {
      pageBreakAfter: 'always',
      fontSize: '1rem',
      padding: 0,
      background: 'none'
    }
  }
}

@radium()
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
