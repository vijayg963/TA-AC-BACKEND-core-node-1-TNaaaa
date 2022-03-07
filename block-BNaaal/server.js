var http = require('http');

http
  .createServer((req, res) => {
    console.log(req, res);
    res.end('Welcome');
  })
  .listen(4000, 'localhost');
