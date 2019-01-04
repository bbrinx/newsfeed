const Parser = require('./parser')
const parser = new Parser()

class ArchDaily {
  
  async getAll() {
    const url = 'http://www.archdaily.com/feed/rss/';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'ArchDaily', articles: articles}
  } 

}

module.exports = ArchDaily;
