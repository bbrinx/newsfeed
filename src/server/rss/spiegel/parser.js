const Parser = require('../parser')

class SpiegelParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('#js-article-top-wide-asset').find('img').attr('src');
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = SpiegelParser;
