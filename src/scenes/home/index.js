import React, { Component } from 'react'
import './styles.css'
import Videos from './components/videos'
import Jumbo from '../../components/jumbo'
import Title from '../../components/title'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Jumbo
          text='DISCOVER\nARTISTS YOU LOVE'
          ratio='0.4'
          image='set:/images/home' />
        <div className='row section'>
          <Title text='Latest and Greatest' />
          <Videos />
        </div>
        <div className='row section alt'>
          <Title text='Coming Next' />
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
