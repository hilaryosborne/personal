import React from 'react'
import { ServiceHero, ServiceBrowse, ServiceCatalog } from 'features/Service'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'
import {resetPage} from 'scripts/utils'

@withAuth
@withRouter
export class Services extends React.Component {
  componentDidMount () {
    resetPage()
  }

  render () {
    return (<SharedWrapper>
      <PageMeta title='Services' />
      <ServiceHero />
      <ServiceBrowse />
      <ServiceCatalog style={{paddingBottom: '3rem'}} />
    </SharedWrapper>)
  }
}
