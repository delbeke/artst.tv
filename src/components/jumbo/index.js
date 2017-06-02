import React, { Component } from 'react'
import './styles.css'

var lineBreak = (text) => {
  return text.split('\\n')
    .map((line, index) => {
      return <div key={index}>{line}</div>
    })
}

class Jumbo extends Component {
  render () {
    let ratio = 0.4
    if (typeof this.props.ratio === 'string') {
      ratio = parseFloat(this.props.ratio)
    }
    let style = {
      paddingBottom: `${ratio * 100}%`,
      backgroundImage: `url(${this.props.image})`
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
