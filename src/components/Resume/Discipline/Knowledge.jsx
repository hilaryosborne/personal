import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  wrapper: {
    borderBottom: '1px #000 dotted',
    marginBottom: '.7rem',
    ':last-child': {
      borderBottom: '0px transparent none'
    }
  }
}

export class KnowledgeComponent extends React.Component {
  static propTypes = {
    data: PropTypes.any
  }

  render () {
    return (<div className='d-flex' style={styles.wrapper}>
      {_.get(this.props.data, 'label')}
      <div className='ml-auto'>
        <i className='far fa-check-circle ml-2' />
        <i className='fas fa-fire ml-2' />
      </div>
    </div>)
  }
}

export const Knowledge = Radium(KnowledgeComponent)
