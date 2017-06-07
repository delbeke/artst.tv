import React, { Component } from 'react'
import './styles.css'

var lineBreak = (text) => {
  return text.split('\\n')
    .map((line, index) => {
      return <div key={index}>{line}</div>
    })
}

class Jumbo extends Component {
  getImageUrl () {
    // todo: take connection speed into account
    let imageUrl = this.props.image
    if (imageUrl.indexOf('set:') === 0) {
      imageUrl = this.props.image.substring(4)
      if (window.innerWidth < 480) {
        imageUrl += '_x1.jpg'
      } else if (window.innerWidth < 960) {
        imageUrl += '_x2.jpg'
      } else {
        imageUrl += '_x4.jpg'
      }
    }
    return imageUrl
  }

  render () {
    let ratio = 0.4
    if (typeof this.props.ratio === 'string') {
      ratio = parseFloat(this.props.ratio)
    }

    let style = {
      paddingBottom: `${ratio * 100}%`,
      backgroundImage: `url(${this.getImageUrl()})`
    }
    return (
      <div className='row'>
        <div className='jumbo' style={style}>
          <div className='overlay' />
          <div className='text'>
            {lineBreak(this.props.text)}
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbo
