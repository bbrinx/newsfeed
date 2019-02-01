const Parser = require('../parser')

class KickerParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageUrl = $('[property="og:image"]').attr('content');
      return imageUrl;
    } catch(err) {
      console.log(`Kicker: ${err}`)
    }
  };
}

module.exports = KickerParser;
