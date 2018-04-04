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
                <Lead>So I guess that means I better be bloody good at what I do or she might take my job! With that fear, I constantly strive to stay ahead of the modern industry... and her.</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
      </Banner>
    </Layer>)
  }
}
