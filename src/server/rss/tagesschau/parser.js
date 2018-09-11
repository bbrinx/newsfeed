const Parser = require('../parser')
const RssParser = require('rss-parser');

const rssParser = new RssParser();

class TagesschauParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('#js-article-top-wide-asset').find('img').attr('src');
    } catch(err) {
      console.log(err)
    }
  };
  
  async parseVideoRss(rss) {
    const res = await rssParser.parseURL(rss);
    const feed = res.items.slice(0, 1).map(item => {
      return {
        title: item.title,
        image: item.itunes.image,
        link: item.enclosure.url,
        date: item.pubDate,
      };
    });
    return feed;
  };

  async getVideoUrl(url) {
    try {
      const $ = await this.getContent(url)
      const src = $('.video-fmt-container').html();
      return {videoUrl: src};
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = TagesschauParser;
