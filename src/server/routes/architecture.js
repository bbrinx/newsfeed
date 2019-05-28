const express = require('express');
const router = express.Router();
const archDaily = require('../rss/archDaily');
const dezeen = require('../rss/dezeen');
const citylab = require('../rss/citylab');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const articles = await Promise.all([archDaily.getAll(), dezeen.getAll(), citylab.getAll()])
    res.send(articles)
  } catch(err) {
    console.log(err)
  }
})



module.exports = router;