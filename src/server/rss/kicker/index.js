const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getSoccer: function() {
    const url = 'http://rss.kicker.de/news/fussball';
    return send(url);
  },

  getBundesliga: function() {
    const url = 'http://rss.kicker.de/news/bundesliga';
    return send(url);
  },

  get_bayern: function() {
    const url = 'http://rss.kicker.de/team/bayernmuenchen';
    return send(url);   
  },

  get_matchday: function() {
    const url = 'http://rss.kicker.de/live/bundesliga';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'Kicker', articles}
} 
