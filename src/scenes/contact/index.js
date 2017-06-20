import React, { Component } from 'react'
import Title from '../../components/title'
import Jumbo from '../../components/jumbo'
import './styles.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact'>
        <Jumbo
          text='GET IN TOUCH'
          ratio='0.2'
          image='set:/images/contact' />
        <div className='row section'>
          <Title text='Artist or performer?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              At artst.tv we depend on exciting new performing artists whose work is free of royalties.
              If this sounds exactly like you then drop us a line to meet up.
            </p>
            <div className='email'>
              <a href='artist@artst.tv'>artists@artst.tv</a>
            </div>
          </div>
        </div>
        <div className='row section alt'>
          <Title text='Looking for exposure?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              As we are just a bunch of volunteers, it would be great to have your financial support as we develop and grow our platform.
              We would be thrilled to return the favour by recording our next gig at your place (store, factory, etc.).
            </p>
            <div className='email'>
              <a href='sponsor@artst.tv'>sponsor@artst.tv</a>
            </div>
          </div>
        </div>
        <div className='row section'>
          <Title text='Want to help?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              Are you a creative photographer, writer, videographer, web designer, illustrator, colour grader … with some time on your hands?
            </p>
            <div className='email'>
              <a href='crew@artst.tv'>crew@artst.tv</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
