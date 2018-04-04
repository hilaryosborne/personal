import React from 'react'
import {resetPage} from 'scripts/utils'

export class Construction extends React.Component {
  componentDidMount () {
    resetPage()
  }

  render () {
    return (<div>
      <div>Construction</div>
    </div>)
  }
}
