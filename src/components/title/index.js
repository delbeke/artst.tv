import React, { Component } from 'react'
import './styles.css'

class Title extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.text}
        </h2>
        <hr className='title' />
      </div>
    )
  }
}

export default Title
