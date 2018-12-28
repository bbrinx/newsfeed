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

  const port = process.env.PORT || 8080

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Please open http://localhost:${port} in your browser.`)
  })

  app.use(express.static(path.resolve('app')))

  app.get('/api/getRssFeed', cache(10), async (req, res) => {
    try {
      const sueddeutsche_feed = await sueddeutsche.get_top()
      const washingtonPost_feed = await washingtonPost.get_top()
      const neuesDeutschland_feed = await neuesDeutschland.get_top()
      const spiegel_feed = await spiegel.get_top()
      const nytimes_feed = await nytimes.get_top()
      const articles = [sueddeutsche_feed, washingtonPost_feed, neuesDeutschland_feed, spiegel_feed, nytimes_feed]
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/getSports', cache(10), async (req, res) => {
    try {
      const bundesliga = await tagesschau.get_soccer()
      const bayern =  await kicker.get_bayern()
      const articles = bundesliga.concat(bayern)
      res.send(articles)
    } catch(err) {
      console.log(err)
    }
  })

  app.get('/api/politics/spiegel', cache(10), async (req, res) => {
    const articles = await spiegel.get_top()
    res.send(articles)
  })

  app.get('/api/politics/nytimes', cache(10), async (req, res) => {
    const articles = await nytimes.get_top()
    res.send(articles)
  })

  app.get('/api/politics/sueddeutsche', cache(10), async (req, res) => {
    const articles = await sueddeutsche.get_top()
    res.send(articles)
  })

  app.get('/api/politics/washingtonPost', cache(10), async (req, res) => {
    const articles = await washingtonPost.get_top()
    res.send(articles)
  })

  app.get('/api/tagesschauVideo', cache(10), async (req, res) => {
    const video = await tagesschau.get_video()
    res.send(video)
  })

  app.get('/api/sports/spiegel', cache(10), async (req, res) => {
    const articles = await spiegel.get_soccer()
    res.send(articles)
  })

  app.get('/api/sports/kicker', cache(10), async (req, res) => {
    const articles = await kicker.get_bundesliga()
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


