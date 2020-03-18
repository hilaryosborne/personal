import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Layer, Banner, BannerPanel, H1, Lead, Container, Row, Col } from 'components/Facade'

@radium
export class BannerLayer extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }
  render () {
    return (<Layer className={classnames('hero-layer', this.props.className)} style={this.props.style}>
      <Banner>
        <BannerPanel
          size='full'
          img={'/media/backgrounds/space_guy.jpg'}
          className='align-items-center'>
          <Container>
            <Row>
              <Col md='8'>
                <H1>Scope. Code. Test. <br />Caffeine. Repeat!</H1>
                <Lead>I am a freelance ReactJS and Laravel web developer located in <strong>Brisbane, Australia</strong>. This is my own little section of the web where I post my stories, thoughts and projects.</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
        <BannerPanel size='full' img={'/media/backgrounds/space_guy.jpg'} />
      </Banner>
    </Layer>)
  }
}
