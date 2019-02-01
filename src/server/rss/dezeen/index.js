const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function() {
    const url = 'http://www.dezeen.com/feed/';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Dezeen', articles: articles}
} 
