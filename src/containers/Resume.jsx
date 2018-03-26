import React from 'react'
import { Page, Titles, EntireDiscipline, EntireProjects, EntireSocial } from 'components/Resume'
import { MarkDown } from 'components/Facade/Content'
import persona from 'config/persona'
import Radium from 'radium'

@Radium
export class Resume extends React.Component {
  render () {
    return (<div>
      <Page>
        <Titles />
        <MarkDown source={persona.career.about} />
        <EntireSocial style={{marginTop: '12rem'}} />
      </Page>
      <Page>
        <EntireDiscipline />
      </Page>
      <Page>
        <EntireProjects />
      </Page>
    </div>)
  }
}
