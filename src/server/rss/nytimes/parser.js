const Parser = require('../parser')

class NytimesParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageSrcset = $('figure').find('img').attr('srcset')
      return imageSrcset
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = NytimesParser;
