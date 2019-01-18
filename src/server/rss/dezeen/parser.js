const RssParser = require('rss-parser');
const Parser = require('../parser')
const cheerio = require('cheerio');

const rssParser = new RssParser()


class DezeenParser extends Parser {
  
  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const itemContent = this.parseText(item.content)
      const itemImage = this.getImageUrl(item.content)
      return {
        title: item.title,
        content: itemContent,
        link: item.link,
        image: itemImage, 
        date: item.pubDate,
      }
    })
    return await Promise.all(feed);
  }

  parseText(htmlTag) {
    try {
      const $ = cheerio.load(htmlTag)
      return $.text();
    } catch(err) {
      console.log(err)
    }
  }

  getImageUrl(htmlTag) {
    try {
      const $ = cheerio.load(htmlTag)
      const imageSrcset =  $('img').attr('srcset')
      return imageSrcset
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = DezeenParser;
