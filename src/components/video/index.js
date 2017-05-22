import React, { Component } from 'react'
import './styles.css'

class Video extends Component {
  render () {
    const d = this.props.youtubeVideoData
    const url = `https://www.youtube.com/embed/${d.id.videoId}?rel=0`
    return (
      <div className='col-md-8 col-md-offset-2'>
        <div className='video'>
          <iframe src={url} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

export default Video
