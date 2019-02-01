const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getTop: function() {
    const url = 'http://feeds.washingtonpost.com/rss/politics';
    return send(url);
  }
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Washington Post', articles}
} 