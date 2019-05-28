const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function() {
    const url = 'https://www.citylab.com/feeds/posts/';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'City Lab', articles}
} 


