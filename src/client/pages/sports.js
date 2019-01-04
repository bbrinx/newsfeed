import React, { Component } from 'react';
import Articles from '../components/articles'
import Standings from '../components/standings'

class Sports extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      newspapers: ['kicker', 'spiegel', 'elfFreunde'],
      standings: [],
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
    const response = await fetch(`/api/sports/data/next-games`); 
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    this.setState({ standings: body.matches })
    for (const newspaper of this.state.newspapers) {
      const response = await fetch(`/api/sports/${newspaper}`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({ feed: [...this.state.feed, body] })
    }
  }

  render() {
    return (
      <div>
        <Standings data={this.state.standings}/>
        <Articles feed={this.state.feed}/>   
      </div>
    );
  }
}

export default Sports;