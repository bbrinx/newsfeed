const Parser = require('../parser')

class BildParser extends Parser {
  
  getImageUrl($) {
    try {
      const anchor = $('.img-r,.img-l').find('a')
      return anchor ? anchor.attr('href') : null
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = BildParser;
