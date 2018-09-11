const Parser = require('./parser')
const parser = new Parser()

class Nytimes {
  
  async get_top() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
    return parser.parseRss(url);
  };

}

module.exports = Nytimes;
