var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Tpye', 'text/html');
    fs.readFile('./node.html');
    res.end();
  }
  if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Tpye', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('Welocme to the Node Server port 5555');
});
