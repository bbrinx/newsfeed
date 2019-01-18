const Parser = require('./parser')
const parser = new Parser()

class Nytimes {
  
  async getTop() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
    return this.send(url);
  };

  async getNewYork() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/NYRegion.xml';
    return this.send(url);
  };

  async getWorld() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/World.xml';
    return this.send(url);
  };

  async getEurope() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/Europe.xml';
    return this.send(url);
  };

  async getPolitics() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/Politics.xml';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'New York Times', articles: articles}
  } 

}

module.exports = Nytimes;
