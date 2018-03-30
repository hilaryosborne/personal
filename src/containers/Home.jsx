import React from 'react'
import { HeroBannerLayer } from 'components/Hero'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedHeader } from 'components/Shared'
import { PageMeta } from 'components/Facade'

@withAuth
@withRouter
export class Home extends React.Component {
  render () {
    return (<div>
      <PageMeta title='Welcome Home' />
      <SharedHeader />
      <HeroBannerLayer />
      <div>ReposSummary</div>
      <div>SocialSummary</div>
      <div>AboutSummary</div>
      <div>ContactForm</div>
      <div>Footer</div>
    </div>)
  }
}
