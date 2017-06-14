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
              At artst.tv we depend on new and exciting artists.
              So if you're a performing artist and your work
              is free of royaltees, let us know a we arange a date.
            </p>
            <div className='email'>
              <a href='artists@artst.tv'>artists@artst.tv</a>
            </div>
          </div>
        </div>
        <div className='row section alt'>
          <Title text='Looking for exposure?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              Altough we are a bunch of volanteers, it's always great
              to find people that want to support us financialy. In return
              we record our next gig at your place (store, factory, etc.).
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
              Do you have creative skills like writing, photography, videography,
              webdesign, illustrator, colorgrader... and you still have some time left?
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
