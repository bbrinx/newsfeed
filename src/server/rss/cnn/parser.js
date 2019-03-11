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
      const imageUrl = await this.getImageUrl(item)
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

  async getImageUrl(item) {
    try {
      if (item['media:group'])
        return item['media:group']['media:content'][0]['$']['url']
      const $ = await this.getContent(item.link)
      return $ ? $('[name=image]').attr('content') : ''
    } catch (err) {
      console.log(`CNN: ${err}`)
    }
  };
}



module.exports = CnnParser;
