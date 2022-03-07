var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.write('Hello World');
  res.end();
}

server.listen(4444, () => {
  console.log('Server listening on port 4444');
});
