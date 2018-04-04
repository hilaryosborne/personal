import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Layer, Banner, BannerPanel, H1, Lead, Container, Row, Col } from 'components/Facade'

@radium
export class Hero extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<Layer className={classnames('project-banner-layer', this.props.className)} style={[this.props.style]}>
      <Banner>
        <BannerPanel
          size='half'
          img={'/media/backgrounds/jumping_man.jpg'}
          className='align-items-center'>
          <Container>
            <Row>
              <Col md='10'>
                <H1>It's 3am, need to ship... <br />Just one more commit..</H1>
                <Lead className='lead'>The curse of loving what you get paid to do! I spend an unhealthy amount of time working on projects for clients and projects for myself. What can I say... it's an obsession!</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
      </Banner>
    </Layer>)
  }
}
