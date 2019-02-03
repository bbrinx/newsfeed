const express = require('express');
const router = express.Router();
const spiegel = require('../rss/spiegel');
const sueddeutsche = require('../rss/sueddeutsche');
const neuesDeutschland = require('../rss/neuesDeutschland');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const articles = await Promise.all([spiegel.getTop(), sueddeutsche.getTop(), neuesDeutschland.getTop()])
    res.send(articles)
  } catch(err) {
    console.log(err)
  }
})



module.exports = router;