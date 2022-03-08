var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;

  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to Home Page');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> this is all about NodeJS </h2>');
  } else if (req.method === 'POST' && pathname === '/about') {
    res.end('{message: this is a post request}');
  }
}

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
