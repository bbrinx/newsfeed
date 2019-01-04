const Parser = require('./parser')
const parser = new Parser()

class Kicker {
  
  async getSoccer() {
    const url = 'http://rss.kicker.de/news/fussball';
    return this.send(url);
  };

  async getBundesliga() {
    const url = 'http://rss.kicker.de/news/bundesliga';
    return this.send(url);
  };

  async get_bayern() {
    try {
      const url = 'http://rss.kicker.de/team/bayernmuenchen';
      return this.send(url);
    } catch(err) {
      console.log(err);
    }    
  };

  async get_matchday() {
    const url = 'http://rss.kicker.de/live/bundesliga';
    return this.send(url);
  };

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'Kicker', articles: articles}
  } 

}

module.exports = Kicker;
