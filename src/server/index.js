require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const mcache = require('memory-cache')
const Spiegel = require('./rss/spiegel/spiegel')
const Nytimes = require('./rss/nytimes/nytimes')
const Tagesschau = require('./rss/tagesschau/tagesschau')
const Kicker = require('./rss/kicker/kicker')

const init = async () => {
  const app = express()
  const server = http.Server(app)
  const spiegel = new Spiegel()
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
      const spiegel_feed = await spiegel.get_top()
      const nytimes_feed = await nytimes.get_top()
      const articles = spiegel_feed.concat(nytimes_feed)
      res.send(nytimes_feed)
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

  app.get('/api/spiegel', async (req, res) => {
    const articles = await spiegel.get_top()
    res.send(articles)
  })

  app.get('/api/nytimes', async (req, res) => {
    const articles = await nytimes.get_top()
    res.send(articles)
  })

  app.get('/api/tagesschauVideo', cache(10), async (req, res) => {
    const video = await tagesschau.getVideo()
    res.send(video)
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


