import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import radium from 'radium'
import classnames from 'classnames'
import { Icon } from './Icon'

const styles = {
  wrapper: {
    borderBottom: '1px #000 dotted',
    paddingBottom: '.5rem',
    marginBottom: '.5rem'
  },
  last: {
    borderBottom: '0px transparent none',
    paddingBottom: '0',
    marginBottom: '0'
  }
}

@radium()
export class Knowledge extends React.Component {
  static propTypes = {
    data: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    last: PropTypes.bool
  }

  static defaultProps = {
    social: false,
    className: '',
    style: {},
    last: false
  }

  getLastStyle () {
    return this.props.last ? {...styles.last} : {}
  }

  render () {
    return (<div className={classnames('d-flex', this.props.className)} style={{...styles.wrapper, ...this.props.style, ...this.getLastStyle()}}>
      {_.get(this.props.data, 'label')}
      <div className='ml-auto'>
        {_.map(_.get(this.props.data, 'tags', []), (icon, k) => {
          return <Icon key={k} tag={icon} className='ml-1' />
        })}
      </div>
    </div>)
  }
}
