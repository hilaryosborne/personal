import React from 'react'
import { ProjectHero } from 'features/Project'
import { withRouter } from 'react-router-dom'
import { withAuth } from 'scripts/auth'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'

@withAuth
@withRouter
export class Services extends React.Component {
  render () {
    return (<SharedWrapper>
      <PageMeta title='Project Timeline' />
      <ProjectHero />
      Services
    </SharedWrapper>)
  }
}
