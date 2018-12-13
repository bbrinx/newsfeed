import React, { Component } from 'react';
import Articles from '../components/articles'

class Politics extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    try {
      const res = await this.callApi()
      this.setState({ articles: res })
    } catch(err) {
      console.log(err)
    }
  }

  async callApi() {
    const response = await fetch('/api/getRssFeed');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <Articles articles={this.state.articles}/>   
    );
  }
}

export default Politics;