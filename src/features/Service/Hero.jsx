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
                <H1>I taught my 7 year old <br />How to code HTML</H1>
                <Lead>Web development is my life and barely a day goes by that I am not learning, teaching or practicing my trade.</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
      </Banner>
    </Layer>)
  }
}
