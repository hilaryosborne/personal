import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const styles = {
  wrapper: { borderBottom: '1px #000 dotted', marginBottom: '.7rem' }
}

export class Knowledge extends React.Component {
  static propTypes = {
    data: PropTypes.any
  }

  render () {
    return (<div className='d-flex' style={styles.wrapper}>
      {_.get(this.props.data, 'label')}
      <div className='ml-auto'>5/2</div>
    </div>)
  }
}
