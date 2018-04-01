import React from 'react'
import { HeroBannerLayer } from 'components/Hero'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'

@withAuth
@withRouter
export class Home extends React.Component {
  render () {
    return (<SharedWrapper>
      <PageMeta title='Welcome Home' />
      <HeroBannerLayer />
    </SharedWrapper>)
  }
}
