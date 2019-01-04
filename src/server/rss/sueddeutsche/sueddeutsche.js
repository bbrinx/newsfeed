const Parser = require('./parser')
const parser = new Parser()


class Sueddeutsche {
  
  async getTop() {
    const url = 'http://rss.sueddeutsche.de/rss/Topthemen';
    const articles = await parser.parseRss(url);
    return {publisher: 'Süddeutsche Zeitung', articles: articles}
  };

}

module.exports = Sueddeutsche;
