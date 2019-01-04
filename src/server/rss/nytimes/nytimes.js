const Parser = require('./parser')
const parser = new Parser()

class Nytimes {
  
  async getTop() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
    const articles = await parser.parseRss(url);
    return {publisher: 'New York Times', articles: articles}
  };

}

module.exports = Nytimes;
