import React, { Component } from 'react'
import Title from '../../components/title'
import Jumbo from '../../components/jumbo'
import './styles.css'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <Jumbo
          text='ABOUT US'
          ratio='0.2'
          image='set:/images/about' />
        <div className='row section'>
          <Title text='Our Mission' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              artst.tv aims to be a platform where everyone can discover new and exciting artists.
              We don't limit our content to music only, but cover a wide range of performing arts such as dance and poetry.
            </p>
            <p>
              All our content is alike in being high quality, entertaining, and 100% authentic.
            </p>
          </div>
        </div>
        <div className='row section alt'>
          <Title text='Team' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              What we do would never be possible without the support of our great team of volunteers.
              Below is a list of people that contributed to this project in some way or another.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
