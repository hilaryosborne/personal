import React from 'react'
import { HeroBannerLayer } from 'components/Hero'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedHeader } from 'components/Shared'

@withAuth
@withRouter
export class Home extends React.Component {
  render () {
    return (<div>
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
