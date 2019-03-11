import React, { Component } from 'react';
import Articles from '../components/articles'
import Spinner from '../components/spinner'

class PoliticsView extends Component {

  componentDidMount() {
    this.props.fetchArticles('home');
  }

  render() {
    return (
      this.props.status === 'pending' ? <Spinner /> : <Articles feed={this.props.articles} />
    );
  }
}

export default PoliticsView;