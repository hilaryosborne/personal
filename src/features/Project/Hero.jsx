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
                <H1>It's 3am, needs to ship... <br />Just one more commit..</H1>
                <Lead className='lead'>I engage in a number of ongoing professional and private projects ranging from web applications to utility libraries.</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
      </Banner>
    </Layer>)
  }
}
