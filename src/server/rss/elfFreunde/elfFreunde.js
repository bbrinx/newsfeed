const Parser = require('./parser')
const parser = new Parser()

class ElfFreunde {
  
  async get_all() {
    const url = 'https://www.11freunde.de/feed';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: '11Freunde', articles: articles}
  } 

}

module.exports = ElfFreunde;
