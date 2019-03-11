const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function () {
    const url = 'http://feeds.feedburner.com/seriouseatsfeaturesvideos';
    return send(url);
  },
  getRecipes: function () {
    const url = 'http://feeds.feedburner.com/seriouseats/recipes';
    return send(url);
  },
  getFoodLab: function () {
    const url = 'http://feeds.feedburner.com/SeriousEats-thefoodlab';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return { publisher: 'Serious Eats', articles }
}


