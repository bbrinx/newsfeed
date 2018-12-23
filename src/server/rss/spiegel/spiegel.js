const Parser = require('./parser')
const parser = new Parser()


class Spiegel {
  
  async get_top() {
    const url = 'http://www.spiegel.de/schlagzeilen/tops/index.rss';
    const articles = await parser.parseRss(url);
    return {publisher: 'Spiegel', articles: articles}
  };

}

module.exports = Spiegel;
