import React, { Component } from 'react'
import './styles.css'
import Jumbo from './components/jumbo'
import Videos from './components/videos'
import Title from '../../components/title'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Jumbo />
        <div className='row section'>
          <Title text='Latest and Gratest' />
          <Videos />
        </div>
        <div className='row section alt'>
          <Title text='Comming Next' />
          <ul className='up-next'>
            <li>Jadoul</li>
            <li>Liv Bastiaens</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
