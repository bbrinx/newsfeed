const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  async getAll() {
    const url = 'http://www.transfermarkt.de/rss/news'
    return send(url)
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Transfermark', articles}
}

