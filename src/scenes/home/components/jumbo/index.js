import React, { Component } from 'react'
import './styles.css'

class Jumbo extends Component {
  render () {
    return (
      <div className='row'>
        <div className='jumbo'>
          <div className='overlay' />
          <div className='text'>
            We help you discover new awesome performing artists
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbo
