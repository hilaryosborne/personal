import React from 'react'
import ReactMarkdown from 'react-markdown'

export class MarkDown extends React.Component {
  render () {
    return (<ReactMarkdown {...this.props} />)
  }
}
