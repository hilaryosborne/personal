import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import siteConfig from 'config/site'

export class Title extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  getText () {
    console.log(this.props)
    return [
      _.get(siteConfig, 'title.prefix'),
      this.props.children,
      _.get(siteConfig, 'title.affix')
    ].join(siteConfig.title.separator)
  }

  render () {
    return (<title>{this.getText()}</title>)
  }
}
