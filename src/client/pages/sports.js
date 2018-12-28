import React, { Component } from 'react';
import Articles from '../components/articles'

class Sports extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      newspapers: ['kicker', 'spiegel', 'elfFreunde']
    };
  }


  componentDidMount() {
    try {
      this.callApi()
    } catch(err) {
      console.log(err)
    }
  }

  async callApi() {
    for (const newspaper of this.state.newspapers) {
      const response = await fetch(`/api/sports/${newspaper}`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({ feed: [...this.state.feed, body] })
    }
  }

  render() {
    return (
      <Articles feed={this.state.feed}/>   
    );
  }
}

export default Sports;