const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getTop: function() {
    const url = 'http://rss.cnn.com/rss/cnn_topstories.rss';
    return send(url);
  }
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'CNN', articles}
} 


