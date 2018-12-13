const RssParser = require('rss-parser');
const axios = require('axios');
const cheerio = require('cheerio');

const rssParser = new RssParser();


class Parser {
  
  async parseRss(rss, publisher) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const body = await this.getContent(item.guid)
      const imageUrl = this.getImageUrl(body)
      return {
        publisher: publisher,
        title: item.title,
        content: item.content,
        link: item.guid,
        image: imageUrl,
        date: item.isoDate,
      };
    });
    return await Promise.all(feed);
  };

  async getContent(articleUrl) {
    try {
      const body = await axios.get(articleUrl)
      return cheerio.load(body.data);
    } catch(err) {
      console.log(err);
    }
  };

  getImageUrl($) {
    try {
      return $('figure').find('img').attr('src');
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = Parser;
