import React from 'react'
import { ProjectHero, ProjectTimeline } from 'features/Project'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'
import {resetPage} from 'scripts/utils'

@withAuth
@withRouter
export class Projects extends React.Component {
  componentDidMount () {
    resetPage()
  }

  render () {
    return (<SharedWrapper>
      <PageMeta title='Project Timeline' />
      <ProjectHero />
      <ProjectTimeline />
    </SharedWrapper>)
  }
}
