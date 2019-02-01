const Parser = require('./parser')
const parser = new Parser()


module.exports = {
  async getTop() {
    const url = 'https://www.neues-deutschland.de/rss/neues-deutschland.xml';
    return send(url);
  }
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Neues Deutschland', articles}
}

