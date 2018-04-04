import React from 'react'
import {resetPage} from 'scripts/utils'

export class NotFound extends React.Component {
  componentDidMount () {
    resetPage()
  }

  render () {
    return (<div>Derp</div>)
  }
}
