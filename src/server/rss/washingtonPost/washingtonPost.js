const Parser = require('./parser')
const parser = new Parser()


class WashingtonPost {
  
  async get_top() {
    const url = 'http://feeds.washingtonpost.com/rss/politics';
    const articles = await parser.parseRss(url);
    return {publisher: 'Washington Post', articles: articles};
  };

}

module.exports = WashingtonPost;
