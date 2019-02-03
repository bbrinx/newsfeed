const Parser = require('../parser')

class WashingtonPostParser extends Parser {
  getImageUrl($) {
    try {
      const imageUrl = $('[property="og:image"]').attr('content');
      return imageUrl;
    } catch(err) {
      console.log(`Washington Post: ${err}`)
    }
  };
}

module.exports = WashingtonPostParser;