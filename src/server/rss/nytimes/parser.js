const Parser = require('../parser')

class NytimesParser extends Parser {
  getImageUrl($) {
    try {
      const imageSrcset = $('figure').find('img').attr('srcset');
      if(!imageSrcset) {
        const thumbnail = $('[name=image]').attr('content');
        return thumbnail;
      }
      return imageSrcset
    } catch(err) {
      console.log(`New York Times: ${err}`)
    }
  };
}

module.exports = NytimesParser;
