const Parser = require('../parser')


class NeuesDeutschlandParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageId = $('.Image').find('img').attr('src').split('/').slice(-1)[0];
      const url = 'https://www.neues-deutschland.de/img/800/' + imageId;
      return imageId ? url : null;
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = NeuesDeutschlandParser;
