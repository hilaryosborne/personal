import React from 'react'
import radium from 'radium'
import {typography} from './styles'

const styling = {
  wrapper: {
    paddingTop: '8rem',
    paddingBottom: '8rem',
    '@media (max-width: 768px)': {
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }
  }
}

@radium
export class Titles extends React.Component {
  render () {
    return (<div className='text-center' style={{...styling.wrapper}}>
      <h1 style={typography.h1}>Hilary Osborne</h1>
      <h2>ReactJS/Laravel Developer</h2>
    </div>)
  }
}
