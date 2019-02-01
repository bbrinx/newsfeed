const mcache = require('memory-cache')

const cache = (duration) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.Url
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1)
        res.sendResponse(body)
      }
      next()
    }
  }
}

module.exports = cache;