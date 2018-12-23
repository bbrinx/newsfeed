const RssParser = require('rss-parser');
const Parser = require('../parser')

const rssParser = new RssParser();

class SueddeutscheParser extends Parser {

  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const htmlBody = await this.getContent(item.link)
      const imageUrl = this.getImageUrl(htmlBody)
      return {
        title: item.title,
        content: item.contentSnippet,
        link: item.link,
        image: imageUrl,
        date: item.isoDate,
      };
    });
    return await Promise.all(feed);
  };
  
  getImageUrl($) {
    try {
      return $('.asset-image__image-tag').attr('srcset').split(', ').slice(-1)[0].split(' ')[0];
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = SueddeutscheParser;
