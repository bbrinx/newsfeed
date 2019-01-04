require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const mcache = require('memory-cache')
const Sueddeutsche = require('./rss/sueddeutsche/sueddeutsche')
const WashingtonPost = require('./rss/washingtonPost/washingtonPost')
const NeuesDeutschland = require('./rss/neuesDeutschland/neuesDeutschland')
const Spiegel = require('./rss/spiegel/spiegel')
const Nytimes = require('./rss/nytimes/nytimes')
const Tagesschau = require('./rss/tagesschau/tagesschau')
const Kicker = require('./rss/kicker/kicker')
const ElfFreunde = require('./rss/elfFreunde/elfFreunde')
const Transfermarkt = require('./rss/transfermarkt/transfermarkt')
const ArchDaily = require('./rss/archDaily/archDaily')
const Dezeen = require('./rss/dezeen/dezeen')
const FootballData = require('./footballData/index')

const init = async () => {
  const app = express()
  const server = http.Server(app)
  const spiegel = new Spiegel()
  const washingtonPost = new WashingtonPost()
  const sueddeutsche = new Sueddeutsche()
  const neuesDeutschland = new NeuesDeutschland()
  const nytimes = new Nytimes()
  const tagesschau = new Tagesschau()
  const kicker = new Kicker()
  const elfFreunde = new ElfFreunde()
  const transfermarkt = new Transfermarkt()
  const footballData = new FootballData()
  const archDaily = new ArchDaily()
  const dezeen = new Dezeen()

  const port = process.env.PORT || 8080

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Please open http://localhost:${port} in your browser.`)
  })

  app.use(express.static(path.resolve('app')))

  // process.on('uncaughtException', function (err) {
  //   console.log(err);
  // });

  app.get('/api/getRssFeed', cache(10), async (req, res) => {
    try {
      const sueddeutsche_feed = await sueddeutsche.getTop()
      const washingtonPost_feed = await washingtonPost.getTop()
      const neuesDeutschland_feed = await neuesDeutschland.getTop()
      const spiegel_feed = await spiegel.getTop()
      const nytimes_feed = await nytimes.getTop()
      const articles = [sueddeutsche_feed, washingtonPost_feed, neuesDeutschland_feed, spiegel_feed, nytimes_feed]
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/getSports', cache(10), async (req, res) => {
    try {
      const bundesliga = await tagesschau.getSoccer()
      const bayern =  await kicker.get_bayern()
      const articles = bundesliga.concat(bayern)
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/sports/data/next-games', cache(10), async (req, res) => {
    try {
      const matches = await footballData.getMatchdayMatches()
      res.send(matches)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/architecture/archDaily', cache(10), async (req, res) => {
    try {
      const articles = await archDaily.getAll()
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/architecture/dezeen', cache(10), async (req, res) => {
    try {
      const articles = await dezeen.getAll()
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/politics/spiegel', cache(10), async (req, res) => {
    const articles = await spiegel.getTop()
    res.send(articles)
  })

  app.get('/api/politics/nytimes', cache(10), async (req, res) => {
    const articles = await nytimes.getTop()
    res.send(articles)
  })

  app.get('/api/politics/sueddeutsche', cache(10), async (req, res) => {
    const articles = await sueddeutsche.getTop()
    res.send(articles)
  })

  app.get('/api/politics/neuesDeutschland', cache(10), async (req, res) => {
    const articles = await neuesDeutschland.getTop()
    res.send(articles)
  })

  app.get('/api/politics/washingtonPost', cache(10), async (req, res) => {
    const articles = await washingtonPost.getTop()
    res.send(articles)
  })

  app.get('/api/tagesschauVideo', cache(10), async (req, res) => {
    const video = await tagesschau.getVideo()
    res.send(video)
  })

  app.get('/api/sports/spiegel', cache(10), async (req, res) => {
    const articles = await spiegel.getSoccer()
    res.send(articles)
  })

  app.get('/api/sports/kicker', cache(10), async (req, res) => {
    const articles = await kicker.getBundesliga()
    res.send(articles)
  })

  app.get('/api/sports/elfFreunde', cache(10), async (req, res) => {
    const articles = await elfFreunde.getAll()
    res.send(articles)
  })

  app.get('/api/sports/transfermarkt', cache(10), async (req, res) => {
    const articles = await transfermarkt.getAll()
    res.send(articles)
  })

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('app', 'index.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.resolve('app', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const cache = (duration) => {
  return(req, res, next) => {
    const key = '__express__' + req.originalUrl || req.Url
    const cachedBody = mcache.get(key)
    if(cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 100000)
        res.sendResponse(body) 
      }
      next()
    }
  }
}

init()


