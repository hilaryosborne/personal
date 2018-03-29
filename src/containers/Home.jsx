import React from 'react'
import { HeroBannerLayer } from 'components/Hero'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'

@withAuth
@withRouter
export class Home extends React.Component {
  render () {
    return (<div>
      <HeroBannerLayer />
      <div>ReposSummary</div>
      <div>SocialSummary</div>
      <div>AboutSummary</div>
      <div>ContactForm</div>
      <div>Footer</div>
    </div>)
  }
}
