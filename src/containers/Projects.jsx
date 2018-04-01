import React from 'react'
import { ProjectBannerLayer } from 'components/Project'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'

@withAuth
@withRouter
export class Projects extends React.Component {
  render () {
    return (<SharedWrapper>
      <PageMeta title='Some Projects' />
      <ProjectBannerLayer />
    </SharedWrapper>)
  }
}
