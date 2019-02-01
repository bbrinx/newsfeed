const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function() {
    const url = 'https://www.11freunde.de/feed';
    return send(url);
  }
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Elf Freunde', articles}
} 