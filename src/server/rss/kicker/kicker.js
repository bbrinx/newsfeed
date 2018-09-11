const Parser = require('./parser')
const parser = new Parser()

class Kicker {
  
  async get_soccer() {
    const url = 'http://rss.kicker.de/news/fussball';
    return await parser.parseRss(url);
  };

  async get_bayern() {
    try {
      const url = 'http://rss.kicker.de/team/bayernmuenchen';
      return await parser.parseRss(url);
    } catch(err) {
      console.log(err)
    }    
  };

  async get_matchday() {
    const url = 'http://rss.kicker.de/live/bundesliga';
    return await parser.parseRss(url);
  };

}

module.exports = Kicker;
