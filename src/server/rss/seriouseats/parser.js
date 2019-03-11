const RssParser = require('rss-parser')
const Parser = require('../parser')
const cheerio = require('cheerio')
const axios = require('axios');

let rssParser = new RssParser();

class SeriousEatsParser extends Parser {
  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const htmlBody = await this.getContent(item.link)
      if (!htmlBody) return {}
      const imageUrl = await this.getImageUrl(htmlBody)
      return {
        title: item.title.trim(),
        content: this.parseText(item.content),
        link: item.link,
        image: imageUrl,
        date: item.pubDate,
      }
    })
    return await Promise.all(feed);
  }

  async getContent(articleUrl) {
    try {
      const body = await axios.get(articleUrl)
      return cheerio.load(body.data);
    } catch (err) {
      console.log(err);
    }
  };

  getImageUrl($) {
    try {
      return $('[property="og:image"]').attr('content');
    } catch (err) {
      console.log(err)
    }
  };

  parseText(htmlTag) {
    try {
      const $ = cheerio.load(htmlTag)
      return $.text();
    } catch (err) {
      console.log(`SeriousEats: ${err}`)
    }
  }
}

module.exports = SeriousEatsParser;
