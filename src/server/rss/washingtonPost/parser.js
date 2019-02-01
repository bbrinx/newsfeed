const Parser = require('../parser')

class WashingtonPostParser extends Parser {
  getImageUrl($) {
    try {
      let imageUrl = $('.inline-photo').find('img').attr('src');
      if(!imageUrl) {
        const video = $('.powa-shot-image');
        if(video[0]) {
          console.log('ITS A VIDEO')
          const backgroundImage = video.css('background-image');
          imageUrl = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
        }
      }
      return imageUrl
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = WashingtonPostParser;