const express = require('express');
const router = express.Router();
const kicker = require('../rss/kicker');
const spiegel = require('../rss/spiegel');
const elfFreunde = require('../rss/elfFreunde');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const kickerArticles = await kicker.getSoccer()
    const spiegelArticles = await spiegel.getSoccer()
    const elfFreundeArticles = await elfFreunde.getAll()
    res.send([kickerArticles, spiegelArticles, elfFreundeArticles])
  } catch(err) {
    console.log(err)
  }
})

module.exports = router;