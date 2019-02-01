const express = require('express');
const router = express.Router();
const archDaily = require('../rss/archDaily');
const dezeen = require('../rss/dezeen');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const archDailyArticles = await archDaily.getAll()
    const dezeenArticles = await dezeen.getAll()
    res.send([archDailyArticles, dezeenArticles])
  } catch(err) {
    console.log(err)
  }
})



module.exports = router;