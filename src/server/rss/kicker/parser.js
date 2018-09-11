const Parser = require('../parser')
const RssParser = require('rss-parser');

const rssParser = new RssParser();


class KickerParser extends Parser {
  
  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      return {
        title: item.title,
        content: item.content,
        link: item.guid,
        date: item.isoDate,
      };
    });
    return await Promise.all(feed);
  };
}

module.exports = KickerParser;
