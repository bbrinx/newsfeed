const RssParser = require('rss-parser');
const axios = require('axios');
const cheerio = require('cheerio');

const rssParser = new RssParser();


class Parser {

  async parseRss(rss) {
    try {
      const res = await rssParser.parseURL(rss)
      const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
        const htmlBody = await this.getContent(item.link)
        if (!htmlBody) return {}
        const imageUrl = await this.getImageUrl(htmlBody)
        return {
          title: item.title,
          content: item.content,
          link: item.link,
          image: imageUrl,
          date: item.isoDate,
        };
      });
      return await Promise.all(feed);
    } catch (err) {
      console.log(err)
    }
  };

  async getContent(articleUrl) {
    try {
      const body = await axios.get(articleUrl)
      return cheerio.load(body.data);
    } catch (err) {
      console.log(err);
    }
  };

  async getImageUrl($) {
    try {
      return $('figure').find('img').attr('src');
    } catch (err) {
      console.log(err)
    }
  };
}

module.exports = Parser;
