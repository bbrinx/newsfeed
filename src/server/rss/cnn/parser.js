const RssParser = require('rss-parser')
const Parser = require('../parser')

let rssParser = new RssParser({
  customFields: {
    item: ['media:group'],
  }
});


class CnnParser extends Parser {
  
  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const imageUrl = item['media:group']['media:content'][0]['$']['url']
      return {
        title: item.title,
        content: item.contentSnippet,
        link: item.link,
        image: imageUrl,
        date: item.pubDate,
      }
    })
    return await Promise.all(feed);
  }
}



module.exports = CnnParser;
