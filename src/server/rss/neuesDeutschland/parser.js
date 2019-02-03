const Parser = require('../parser')


class NeuesDeutschlandParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageUrl = $('[property="og:image"]').attr('content');
      return imageUrl;
    } catch(err) {
      console.log(`Neues Deutschland: ${err}`)
    }
  };
}

module.exports = NeuesDeutschlandParser;
