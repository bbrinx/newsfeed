const Parser = require('./parser')
const parser = new Parser()

module.exports = {
  getAll: function () {
    const url = 'https://www.bonappetit.com/feed/rss';
    return send(url);
  },

  getRecipes: function () {
    const url = 'https://www.bonappetit.com/feed/latest-recipes/rss';
    return send(url);
  },

  getStories: function () {
    const url = 'https://www.bonappetit.com/rss/stories';
    return send(url);
  },
}

const send = async (url) => {
  const articles = await parser.parseRss(url);
  return { publisher: 'bon appétit', articles }
}


