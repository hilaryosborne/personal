import React from 'react'
import { ProjectBannerLayer, ProjectTimelineLayer } from 'components/Project'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'

@withAuth
@withRouter
export class Projects extends React.Component {
  render () {
    return (<SharedWrapper>
      <PageMeta title='Project Timeline' />
      <ProjectBannerLayer />
      <ProjectTimelineLayer />
    </SharedWrapper>)
  }
}
