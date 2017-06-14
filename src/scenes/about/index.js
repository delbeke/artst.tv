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
              artst.tv aims to be a platform where everyone can discover new
              and interesting artists. We don't limit our content to
              music, but cover a wide range of perfomances like dance and poeitry.
            </p>
            <p>
              The content we provide has to meet high quality standards,
              must be entertaining and authentic.
            </p>
          </div>
        </div>
        <div className='row section alt'>
          <Title text='Team' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              What we do would never be possible without a great team of volenteers.
              Below you can find a list of people that contributed to this project in some way or another.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
