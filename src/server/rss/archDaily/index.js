const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function() {
    const url = 'http://www.archdaily.com/feed/rss/';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'archdaily', articles: articles}
} 
