const express = require('express');
const router = express.Router();
const seriouseats = require('../rss/seriouseats');
const bonappetit = require('../rss/bonappetit');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const articles = await Promise.all([seriouseats.getAll(), bonappetit.getAll()])
    res.send(articles)
  } catch (err) {
    console.log(err)
  }
})



module.exports = router;