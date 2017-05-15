import React, { Component } from 'react'
import './styles.css'
import Jumbo from './components/jumbo'
import Videos from './components/videos'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Jumbo />
        <h2>Latest and Gratest</h2>
        <Videos />
        <h2>Comming Next</h2>
        <ul className='up-next'>
          <li>Jadoul</li>
          <li>Liv Bastiaens</li>
        </ul>
      </div>
    )
  }
}

export default Home
