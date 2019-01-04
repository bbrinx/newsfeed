import React, { Component } from 'react';

class Articles extends Component {

  render() {
    return (
      <div className="articles">
        {this.props.feed.map((publisher, index) => {
          console.log(publisher)
          return (
            <div className="publisher" key={index}>
              <h2><span>{publisher.publisher}</span></h2>
              <div className="article-list">
                {publisher.articles.map((article, index) => (
                  article.content ? (
                    <a className={`article-wrapper-link ${!article.image ? 'no-image' : ''}`} href={article.link} key={index} rel="noopener noreferrer" target="_blank">
                      <div className="article-wrapper">
                        <div className="article-info">
                          <h3 className="article-title">{article.title}</h3>
                          <p className="article-description">{article.content}</p>
                        </div>
                        {article.image ? (
                          <div className="article-image-container">
                            <img className="article-image" src={article.image}/>
                          </div>
                        ) : null}
                      </div>
                    </a>
                  ) : null
                ))}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Articles;