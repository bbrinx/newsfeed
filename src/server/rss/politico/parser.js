const Parser = require('../parser')


class PoliticoParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageUrl = $('picture').find('source').attr('srcset')
      return imageUrl ? imageUrl : null
    } catch(err) {
      console.log(err)
    }
  };
}



module.exports = PoliticoParser;
