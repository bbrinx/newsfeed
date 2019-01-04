const Parser = require('./parser')
const parser = new Parser()

class Transfermarkt {
  
  async getAll() {
    const url = 'http://www.transfermarkt.de/rss/news'
    return this.send(url)
  };

  async send(url){
    const articles = await parser.parseRss(url)
    return {publisher: 'Transfermarkt', articles: articles}
  } 

}

module.exports = Transfermarkt;
