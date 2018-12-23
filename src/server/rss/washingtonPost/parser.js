const Parser = require('../parser')
const RssParser = require('rss-parser');

const rssParser = new RssParser();

class WashingtonPostParser extends Parser {

  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      return {
        title: item.title,
        content: item.content,
        link: item.link,
        image: null,
        date: item.isoDate,
      };
    });
    return await Promise.all(feed);
  };
  
  getImageUrl($) {
    try {
      // const test = $('.inline-photo').find('img').attr('src');
      return null;
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = WashingtonPostParser;
