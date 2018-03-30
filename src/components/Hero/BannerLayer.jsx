import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Layer, FacadeBanner, FacadeBannerPanel, H1, Lead, Container, Row, Col } from 'components'

@Radium
export class BannerLayer extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }
  render () {
    return (<Layer className={classnames('hero-layer', this.props.className)} style={[this.props.style]}>
      <FacadeBanner>
        <FacadeBannerPanel
          size='full'
          img={'/media/backgrounds/space_guy.jpg'}
          className='align-items-center'>
          <Container>
            <Row>
              <Col md='8'>
                <H1>Scope. Code. Test. <br />Coffee. Repeat!</H1>
                <Lead className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc consectetur, mollis mauris sed, feugiat ex. Cras ut risus diam. Integer eu elit efficitur, iaculis.</Lead>
              </Col>
            </Row>
          </Container>
        </FacadeBannerPanel>
        <FacadeBannerPanel size='full' img={'/media/backgrounds/space_guy.jpg'} />
      </FacadeBanner>
    </Layer>)
  }
}
