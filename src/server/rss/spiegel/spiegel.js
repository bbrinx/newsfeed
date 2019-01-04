const Parser = require('./parser')
const parser = new Parser()


class Spiegel {
  
  async getTop() {
    const url = 'http://www.spiegel.de/schlagzeilen/tops/index.rss';
    const articles = await parser.parseRss(url);
    return {publisher: 'Spiegel', articles: articles}
  };

  async getSoccer() {
    const url = 'http://www.spiegel.de/sport/fussball/index.rss';
    const articles = await parser.parseRss(url);
    return {publisher: 'Spiegel', articles: articles}
  };

}

module.exports = Spiegel;
