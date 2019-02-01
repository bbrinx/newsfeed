const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getTop: function() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
    return send(url);
  },
  
  getNewYork: function() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/NYRegion.xml';
    return send(url);
  },
  
  getWorld: function() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/World.xml';
    return send(url);
  },
  
  getEurope: function() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/Europe.xml';
    return send(url);
  },
  
  getPolitics: function() {
    const url = 'https://www.nytimes.com/services/xml/rss/nyt/Politics.xml';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'New York Times', articles}
} 


