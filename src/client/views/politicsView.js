import React, { Component } from 'react';
import Articles from '../components/articles'
import Spinner from '../components/spinner'

class Politics extends Component {

  componentDidMount() {
    this.props.fetchArticles('politics');
  }

  render() {
    console.log('status', this.props.status)
    return (
      this.props.status === 'pending' ? <Spinner /> : <Articles feed={this.props.articles}/>
    );
  }
}

export default Politics;