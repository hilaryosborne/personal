import React from 'react'
import PropTypes from 'prop-types'

export class Project extends React.Component {
    static propTypes = {
      data: PropTypes.any
    }
    render () {
      return (<div style={{marginBottom: '4rem'}}>
        <h4 className='d-flex'>{this.props.data.label}<span className='ml-auto'>2017</span></h4>
        <div className='d-flex'>
          Personal Project, ReactJS, DevOps, General
          <span className='ml-auto'>Ongoing, +150hrs</span>
        </div>
        <p className='mt-2'><i className='fas fa-quote-left mr-1' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna augue, aliquet quis nunc sed, mattis volutpat velit. Fusce faucibus, arcu ac hendrerit accumsan, lacus nisl vestibulum tellus, nec consectetur.</p>
        <div className='links'>
          <div className='d-flex'>
            <div>
              <i className='fab fa-github mr-1' /> Main Project Repository
            </div>
            <a href='https://github.com/hilaryosborne/react-spa' target='blank' className='ml-auto'>https://github.com/hilaryosborne/react-spa</a></div>
        </div>
      </div>)
    }
}
