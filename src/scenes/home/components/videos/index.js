import React, { Component } from 'react'
import getVideos from '../../../../services/youtube'
import Video from '../../../../components/video'
import './styles.css'

class Videos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    getVideos().then((data) => {
      this.setState({ data: data })
    })
  }

  render () {
    if (this.state.data) {
      const videos = this.state.data.slice(0, 1).map((item) => {
        return <Video key={item.id.videoId} youtubeVideoData={item} />
      })
      return (
        <div className='videos'>
          {videos}
        </div>
      )
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default Videos
