const Parser = require('./parser')
const parser = new Parser()


module.exports = {
  getTop: function() {
    const url = 'http://www.spiegel.de/schlagzeilen/tops/index.rss';
    return send(url)
  },

  getSoccer: function() {
    const url = 'http://www.spiegel.de/sport/fussball/index.rss';
    return send(url)
  }
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Spiegel', articles}
}

