require('dotenv').config()
const http = require('http')
const path = require('path')
const express = require('express')
const FootballData = require('./footballData/index')

const home = require('./routes/home');
const politics = require('./routes/politics');
const germany = require('./routes/germany');
const sports = require('./routes/sports');
const architecture = require('./routes/architecture');
const food = require('./routes/food');

const init = async () => {
  const app = express()
  const server = http.Server(app)
  const footballData = new FootballData()


  const port = process.env.PORT || 8080

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Please open http://localhost:${port} in your browser.`)
  })
  server.timeout = 180000;

  app.use(express.static(path.resolve('app')));

  app.use('/api/home', home);
  app.use('/api/politics', politics);
  app.use('/api/germany', germany);
  app.use('/api/sports', sports);
  app.use('/api/architecture', architecture);
  app.use('/api/food', food);
  // process.on('uncaughtException', function (err) {
  //   console.log(err);
  // });

  // app.get('/api/sports/data/next-games', cache(10), async (req, res) => {
  //   try {
  //     const matches = await footballData.getMatchdayMatches()
  //     res.send(matches)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // })

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('app', 'index.html'));
  });

  app.get('*', function (req, res) {
    res.sendFile(path.resolve('app', 'index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

init()


