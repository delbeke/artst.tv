import React, { Component } from 'react'
import Title from '../../components/title'
import './styles.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact'>
        <div className='row section'>
          <Title text='An artist?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              At artst.tv we depend on new and exciting artists.
              So if you're a performing artist and your performance
              is free of royaltees, let us know a we arange a date.
              Send an email to soonfamous@artst.tv.
            </p>
          </div>
        </div>
        <div className='row section alt'>
          <Title text='Have money?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              Altough we are a bunch of volanteers, it's always great
              to find people that want to support us financialy. In return
              we record our next gig at your place (store, factory, etc.).
              Send an email to sponsorship@artst.tv.
            </p>
          </div>
        </div>
        <div className='row section'>
          <Title text='To much time?' />
          <div className='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4'>
            <p>
              Do you have creative skills like writing, photography, videography,
              webdesign, illustrator, colorgrader... and you still have some time left?
              Send an email to creative@artst.tv.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
