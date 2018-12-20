const server = require('./server')
const Bundlers = require('parcel-bundler')

let bundler = new Bundlers('./public/index.html')
server.use(bundler.middleware())

server.listen(3000)


