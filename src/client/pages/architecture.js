import React, { Component } from 'react';
import Articles from '../components/articles'

class Architecture extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      newspapers: ['archDaily', 'dezeen']
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
      try {
        const response = await fetch(`/api/architecture/${newspaper}`)
        const body = await response.json()
        console.log(body)
        if (response.status !== 200) throw Error(body.message)
        this.setState({ feed: [...this.state.feed, body] })
      } catch(err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <Articles feed={this.state.feed}/>   
    );
  }
}

export default Architecture;