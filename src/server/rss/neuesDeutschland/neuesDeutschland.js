const Parser = require('./parser')
const parser = new Parser()


class NeuesDeutschland {
  
  async get_top() {
    const url = 'https://www.neues-deutschland.de/rss/neues-deutschland.xml';
    const articles = await parser.parseRss(url);
    return {publisher: 'Neues Deutschland', articles: articles}
  };

}

module.exports = NeuesDeutschland;
