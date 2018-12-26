const Parser = require('./parser')
const parser = new Parser()


class Tagesschau {
  
  async get_video() {
    const url = 'https://www.tagesschau.de/export/video-podcast/webm/tagesschau_https/';
    return await parser.parseVideoRss(url);
  };

  async get_soccer() {
    const url = 'https://www.sportschau.de//fussball/bundesliga/fussballbundesligaindex100~_type-rss.feed';
    return await parser.parseRss(url);
  };

}

module.exports = Tagesschau;
