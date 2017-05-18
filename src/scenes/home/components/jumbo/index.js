import React, { Component } from 'react'
import './styles.css'

class Jumbo extends Component {
  render () {
    return (
      <div className='row'>
        <div className='jumbo'>
          <div className='overlay' />
          <div className='text'>
            DISCOVER <br />ARTISTS YOU LOVE
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbo
