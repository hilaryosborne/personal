import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

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
export class Link extends React.Component {
  static propTypes = {
    social: PropTypes.any,
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
    return (<div className={classnames('d-block d-md-flex', this.props.className)} style={{...this.props.style, ...styles.wrapper, ...this.getLastStyle()}}>
      <div>
        <i className={classnames(_.get(this.props.social, 'icon', 'far fa-file-alt'), 'mr-1')} /> {_.get(this.props.social, 'label')}
      </div>
      <a href={_.get(this.props.social, 'url')} className='ml-auto'>{_.get(this.props.social, 'url')}</a>
    </div>)
  }
}
