import React from 'react'
import {typography} from './styles'

export class Titles extends React.Component {
  render () {
    return (<div className='text-center' style={{paddingTop: '8rem', paddingBottom: '8rem'}}>
      <h1 style={typography.h1}>Hilary Osborne</h1>
      <h2>ReactJS/Laravel Developer</h2>
    </div>)
  }
}
