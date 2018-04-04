import React from 'react'
import { MenuIcon } from 'components/Facade'
import persona from 'config/persona'
import _ from 'lodash'

export class Icons extends React.Component {
  getLinks () {
    return _.get(persona, 'personal.social', [])
  }

  render () {
    return (_.map(this.getLinks(), (link, k) => {
      return <MenuIcon key={k} to={link.url} external><i className={link.icon} /></MenuIcon>
    }))
  }
}
