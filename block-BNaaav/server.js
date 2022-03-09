var http = require('http');
var fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url, req.method);
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('.' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'jpg') {
    res.setHeader('Content-Type', 'text/img');
    fs.readFile('.' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}

server.listen(2000, () => {
  console.log('This route is listing for the 2000');
});
