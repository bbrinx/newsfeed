import React, { Component } from 'react';
import Articles from '../components/articles'
import Spinner from '../components/spinner'

class FoodView extends Component {

  componentDidMount() {
    this.props.fetchArticles('food');
  }

  render() {
    return (
      this.props.status === 'pending' ? <Spinner /> : <Articles feed={this.props.articles} />
    );
  }
}

export default FoodView;