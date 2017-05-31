import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer row'>
        <div className='left'>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className='right'>
          <a href='https://www.youtube.com/artst.tv'>YouTube</a>
          <a href='https://www.twitter.com/artst.tv'>Twitter</a>
        </div>
      </div>
    )
  }
}

export default Footer
