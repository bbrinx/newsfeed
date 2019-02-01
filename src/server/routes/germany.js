const express = require('express');
const router = express.Router();
const spiegel = require('../rss/spiegel');
const sueddeutsche = require('../rss/sueddeutsche');
const neuesDeutschland = require('../rss/neuesDeutschland');
const cache = require('../utils/cache')

router.get('/', cache(10), async (req, res) => {
  try {
    const spiegelArticles = await spiegel.getTop()
    const sueddeutscheArticles = await sueddeutsche.getTop()
    const neuesDeutschlandArticles = await neuesDeutschland.getTop()
    res.send([spiegelArticles, sueddeutscheArticles, neuesDeutschlandArticles])
  } catch(err) {
    console.log(err)
  }
})



module.exports = router;