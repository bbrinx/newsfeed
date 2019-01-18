const Parser = require('./parser')
const parser = new Parser()

class Politico {
  
  async getPolitics() {
    const url = 'http://www.politico.com/rss/politics08.xml';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'Politico', articles: articles}
  } 

}

module.exports = Politico;
