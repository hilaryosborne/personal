import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FacadeLayer, FacadeBanner, FacadeBannerPanel, H1, Lead } from 'components'

@Radium
export class BannerLayer extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }
  render () {
    return (<FacadeLayer className={classnames('hero-layer', this.props.className)} style={[this.props.style]}>
      <FacadeBanner>
        <FacadeBannerPanel
          size='full'
          img={'/media/backgrounds/space_guy.jpg'}
          className='align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col col-12 col-md-8'>
                <H1>Scope. Code. Test. <br />Coffee. Repeat!</H1>
                <Lead className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc consectetur, mollis mauris sed, feugiat ex. Cras ut risus diam. Integer eu elit efficitur, iaculis.</Lead>
              </div>
            </div>
          </div>
        </FacadeBannerPanel>
        <FacadeBannerPanel size='full' img={'/media/backgrounds/space_guy.jpg'} />
      </FacadeBanner>
    </FacadeLayer>)
  }
}
