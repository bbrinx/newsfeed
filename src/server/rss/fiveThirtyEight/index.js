const Parser = require('./parser')
const parser = new Parser()


module.exports = {
  
  getAll: function() {
    const url = 'https://fivethirtyeight.com/all/feed/'
    return send(url)
  },

  getFeatures: function() {
    const url = 'https://fivethirtyeight.com/features/feed/'
    return send(url)
  },

  getPolitics: function() {
    const url = 'https://fivethirtyeight.com/politics/feed/'
    return send(url)
  },

  getSports: function() {
    const url = 'https://fivethirtyeight.com/sports/feed/'
    return send(url)
  },

  getEconomics: function() {
    const url = 'https://fivethirtyeight.com/economics/feed/'
    return send(url)
  },

  getScience: function() {
    const url = 'https://fivethirtyeight.com/science/feed/'
    return send(url)
  },

  getLife: function() {
    const url = 'https://fivethirtyeight.com/life/feed/'
    return send(url)
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return {publisher: 'FiveThiryEight', articles}
} 
