import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  async componentDidMount() {
    try {
      const res = await this.callApi()
      this.setState({ videos: res })
    } catch(err) {
      console.log(err)
    }
  }

  async callApi() {
    const response = await fetch('/api/tagesschauVideo');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log(body)
    return body;
  }

  render() {
    return (
      <div className="video-wrapper">
        {this.state.videos.map((video, index) => (
          <div className="video" key={index}>
            <h2>{video.title}</h2>
            <Player
              playsInline
              poster={video.image}
              src={video.link} 
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
        ))}
      </div>
    );
  }
}

export default Video;