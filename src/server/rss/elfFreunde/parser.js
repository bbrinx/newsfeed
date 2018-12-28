const Parser = require('../parser')

class ElfFreundeParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('article').find('img').attr('src');
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = ElfFreundeParser;
