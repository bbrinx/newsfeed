const Parser = require('./parser')
const parser = new Parser()


class Spiegel {
  
  async get_top() {
    const url = 'http://www.spiegel.de/schlagzeilen/tops/index.rss';
    return parser.parseRss(url);
  };

}

module.exports = Spiegel;
