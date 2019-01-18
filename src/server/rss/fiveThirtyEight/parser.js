const Parser = require('../parser')

class FiveThirtyEightParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageSrcset = $('.featured-picture source').attr('srcset')
      return imageSrcset
    } catch(err) {
      console.log(`FiveThirtyEigth: ${err}`)
    }
  };
}

module.exports = FiveThirtyEightParser;
