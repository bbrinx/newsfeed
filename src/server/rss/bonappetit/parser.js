const RssParser = require('rss-parser')
const Parser = require('../parser')

const rssParser = new RssParser({
  customFields: {
    item: ['media:thumbnail', 'description']
  }
});

class bonappetit extends Parser {
  async parseRss(rss) {
    try {
      const res = await rssParser.parseURL(rss)
      const feed = res.items.slice(0, 5).filter(item => item.title !== '').map(async (item) => {
        const imageUrl = this.getImageUrl(item['media:thumbnail'])
        return {
          title: item.title,
          content: item.description,
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
  getImageUrl(imageTag) {
    try {
      return imageTag['$'].url
    } catch (err) {
      console.log(`Bon Appetit: ${err}`)
    }
  }
}

module.exports = bonappetit;
