import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import { Layer, Banner, BannerPanel, H1, Lead, Container, Row, Col } from 'components/Facade'

@radium
export class BannerLayer extends React.Component {
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
              <Col md='8'>
                <H1>Scope. Code. Test. <br />Caffeine. Repeat!</H1>
                <Lead className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc consectetur, mollis mauris sed, feugiat ex. Cras ut risus diam. Integer eu elit efficitur, iaculis.</Lead>
              </Col>
            </Row>
          </Container>
        </BannerPanel>
      </Banner>
    </Layer>)
  }
}
