import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Header extends Component {
  render () {
    return (
      <div className='header row'>
        <Link to='/' className='name'>ARTST.TV</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/explore'>Explore</Link>
      </div>
    )
  }
}

export default Header
