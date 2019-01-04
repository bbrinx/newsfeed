const Parser = require('../parser')

class ElfFreundeParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('article').find('img').attr('src');
    } catch(err) {
      console.log(`11Freunde: ${err}`)
    }
  }
}

module.exports = ElfFreundeParser;
