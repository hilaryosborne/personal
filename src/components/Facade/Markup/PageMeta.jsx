import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import siteConfig from 'config/site'
import { Helmet } from 'react-helmet'

export class PageMeta extends React.Component {
  static propTypes = {
    title: PropTypes.any,
    children: PropTypes.any
  }

  getTitle () {
    return [
      _.get(siteConfig, 'title.prefix'),
      this.props.title,
      _.get(siteConfig, 'title.affix')
    ].join(siteConfig.title.separator)
  }

  render () {
    return (<Helmet>
      <title>{this.getTitle()}</title>
      {this.props.children}
    </Helmet>)
  }
}
