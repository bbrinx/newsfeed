const Parser = require('../parser')

class NytimesParser extends Parser {
  getImageUrl($) {
    try {
      console.log('testi', $)
      const imageSrcset = $('figure').find('img').attr('srcset');
      if(!imageSrcset) {
        const thumbnail = $('[name=image]').attr('content');
        return thumbnail;
      }
      return imageSrcset
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = NytimesParser;
