const Parser = require('../parser')

class SpiegelParser extends Parser {
  getImageUrl($) {
    try {
      const imageUrl = $('[property="og:image"]').attr('content');
      const safeImageUrl = imageUrl.replace('http', 'https'); // Prevent Mixed Content
      return safeImageUrl;
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = SpiegelParser;
