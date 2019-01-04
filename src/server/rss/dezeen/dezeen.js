const Parser = require('./parser')
const parser = new Parser()

class Dezeen {
  
  async getAll() {
    const url = 'http://www.dezeen.com/feed/';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'Dezeen', articles: articles}
  } 

}

module.exports = Dezeen;
