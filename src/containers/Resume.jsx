import React from 'react'
import { Page, Titles, DisciplineEntire } from 'components/Resume'
import { MarkDown } from 'components/Facade/Content'
import persona from 'config/persona'

export class Resume extends React.Component {
  render () {
    return (<div>
      <Page>
        <Titles />
        <MarkDown source={persona.career.about} />
      </Page>
      <Page>
        <DisciplineEntire />
      </Page>
      <Page>
        <DisciplineEntire />
      </Page>
    </div>)
  }
}
