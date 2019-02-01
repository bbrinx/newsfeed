const Parser = require('./parser')
const parser = new Parser()


module.exports = {
  getTop() {
    const url = 'http://rss.sueddeutsche.de/rss/Topthemen';
    return send(url)
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Sueddeutsche', articles}
}