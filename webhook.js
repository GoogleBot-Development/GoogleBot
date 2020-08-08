const secret = "GoogleBot123";
const http = require('http');
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/webhook', secret: secret })


http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(8080)

handler.on('error', function (err) {
  console.error('Error:', err.message)
});
 
handler.on('push', function (event) {
  console.log("it worked!")
});
 
