const Parser = require('../parser')

class KickerParser extends Parser {
  
  getImageUrl($) {
    try {
      const anchor = $('.img-r,.img-l').find('a')
      return anchor ? anchor.attr('href') : null
    } catch(err) {
      console.log(`Kicker: ${err}`)
    }
  };
}

module.exports = KickerParser;
