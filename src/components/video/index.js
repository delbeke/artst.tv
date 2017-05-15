import React, { Component } from 'react'
import './styles.css'

class Video extends Component {
  render () {
    const d = this.props.youtubeVideoData
    console.log(d)
    const style = {
      backgroundImage: `url(${d.snippet.thumbnails.high.url})`
    }
    const titleParts = d.snippet.title.split('-')
    const title = titleParts[0]
    let subTitle = titleParts[1] || ''
    if (titleParts.length === 3) {
      subTitle += ' (' + titleParts[2].trim() + ')'
    }
    return (
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <div className='video'>
            <div className='image' style={style} />
            <div className='title'>
              {title}
            </div>
            <div className='subtitle'>
              {subTitle}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Video
