import React from 'react'
import { HeroBannerLayer } from 'components/Hero'

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
