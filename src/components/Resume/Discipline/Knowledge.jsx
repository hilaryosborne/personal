import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Icon } from './Icon'

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
        {_.map(_.get(this.props.data, 'tags', []), (icon, k) => {
          return <Icon key={k} tag={icon} className='ml-1' />
        })}
      </div>
    </div>)
  }
}

export const Knowledge = Radium(KnowledgeComponent)
