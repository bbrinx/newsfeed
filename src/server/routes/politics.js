const express = require('express');
const router = express.Router();
const nyt = require('../rss/nytimes');
const fiveThirtyEight = require('../rss/fiveThirtyEight');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const articles = await Promise.all([nyt.getTop(), fiveThirtyEight.getTop()])
    res.send(articles)
  } catch(err) {
    console.log(err)
  }
})

module.exports = router;