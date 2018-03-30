import React from 'react'
import { Page, Titles, EntireDiscipline, EntireProjects, EntireSocial } from 'components/Resume'
import { MarkDown } from 'components/Facade/Content'
import persona from 'config/persona'
import Radium from 'radium'
import { PageMeta } from 'components'

const styling = {
  social: {
    marginTop: '12rem',
    '@media (max-width: 768px)': {
      marginTop: '4rem'
    }
  }
}

@Radium
export class Resume extends React.Component {
  render () {
    return (<div>
      <PageMeta title='Printer Friendly Resume' />
      <Page>
        <Titles />
        <MarkDown source={persona.career.about} />
        <EntireSocial style={{...styling.social}} />
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
