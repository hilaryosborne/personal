import React from 'react'
import persona from 'config/persona'
import _ from 'lodash'
import { MenuExternalLink } from 'components/Facade'

export class MenuIcons extends React.Component {
  getLinks () {
    return _.get(persona, 'personal.social', [])
  }

  render () {
    return (<div className='d-block d-md-inline'>
      {_.map(this.getLinks(), (link, k) => {
        return <MenuExternalLink key={k} to={link.url} className='px-3 py-2 px-md-1 py-md-0'>
          <i className={link.icon} /> <span className='ml-1 d-inline-block d-md-none'>{link.label}</span>
        </MenuExternalLink>
      })}
    </div>)
  }
}
