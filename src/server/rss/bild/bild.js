const Parser = require('./parser')
const parser = new Parser()

class Bild {
  
  async get_sport() {
    const url = 'https://www.bild.de/rss-feeds/rss-16725492,feed=sport.bild.html';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'Bild', articles: articles}
  } 

}

module.exports = Bild;
