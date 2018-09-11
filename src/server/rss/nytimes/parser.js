const Parser = require('../parser')

class NytimesParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('figure').find('img').attr('src');
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = NytimesParser;
