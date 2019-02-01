const express = require('express');
const router = express.Router();
const nyt = require('../rss/nytimes');
const wapo = require('../rss/washingtonPost');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const nytArticles = await nyt.getTop()
    const wapoArticles = await wapo.getTop()
    res.send([nytArticles, wapoArticles])
  } catch(err) {
    console.log(err)
  }
})

module.exports = router;