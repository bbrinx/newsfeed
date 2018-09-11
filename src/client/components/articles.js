import React, { Component } from 'react';

class Articles extends Component {

  render() {
    return (
      <div className="articles">
        {this.props.articles.map((article, index) => (
          <a className="article-wrapper-link" href={article.link} key={index}>
            <div className="article-wrapper">
            <div className="article-info">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.content}</p>
            </div>
            <div className="article-image-container">
              <img className="article-image" src={article.image}/>
            </div>
          </div>
          </a>
        ))}
      </div>
    );
  }
}

export default Articles;