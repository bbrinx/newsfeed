const RssParser = require('rss-parser')
const Parser = require('../parser')
const cheerio = require('cheerio')

const rssParser = new RssParser()


class ArchDailyParser extends Parser {
  
  async parseRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
      const itemContent = this.parseText(item.content)
      return {
        title: item.title.trim(),
        content: itemContent,
        link: item.link,
        image: item.enclosure.url.replace('medium_jpg', 'slideshow'), 
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
      console.log(`Archdaily: ${err}`)
    }
  }
}



module.exports = ArchDailyParser;
