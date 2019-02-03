const express = require('express');
const router = express.Router();
const kicker = require('../rss/kicker');
const spiegel = require('../rss/spiegel');
const elfFreunde = require('../rss/elfFreunde');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const articles = await Promise.all([kicker.getSoccer(), spiegel.getSoccer(), elfFreunde.getAll()])
    res.send(articles)
  } catch(err) {
    console.log(err)
  }
})

module.exports = router;