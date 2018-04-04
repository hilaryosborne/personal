import React from 'react'
import { HeroBannerLayer } from 'components/Hero'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'
import { resetPage } from 'scripts/utils'

@withAuth
@withRouter
export class Home extends React.Component {
  componentDidMount () {
    resetPage()
  }

  render () {
    return (<SharedWrapper>
      <PageMeta title='Welcome' />
      <HeroBannerLayer />
    </SharedWrapper>)
  }
}
