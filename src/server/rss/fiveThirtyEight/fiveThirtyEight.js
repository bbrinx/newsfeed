const Parser = require('./parser')
const parser = new Parser()


class FiveThirtyEight {
  
  async getAll() {
    const url = 'https://fivethirtyeight.com/all/feed/'
    return this.send(url)
  }

  async getFeatures() {
    const url = 'https://fivethirtyeight.com/features/feed/'
    return this.send(url)
  }

  async getPolitics() {
    const url = 'https://fivethirtyeight.com/politics/feed/'
    return this.send(url)
  }

  async getSports() {
    const url = 'https://fivethirtyeight.com/sports/feed/'
    return this.send(url)
  }

  async getEconomics() {
    const url = 'https://fivethirtyeight.com/economics/feed/'
    return this.send(url)
  }

  async getScience() {
    const url = 'https://fivethirtyeight.com/science/feed/'
    return this.send(url)
  }

  async getLife() {
    const url = 'https://fivethirtyeight.com/life/feed/'
    return this.send(url)
  }

  async send(url){
    const articles = await parser.parseRss(url);
    return {publisher: 'FiveThirtyEight', articles: articles}
  } 

}

module.exports = FiveThirtyEight;
