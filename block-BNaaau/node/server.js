// writeCode

// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

var http = require('http');
const { stringify } = require('querystring');

let server1 = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, req);
  res.end();
}

server1.listen(5000, () => {
  console.log('Serever is listing to 4k');
});

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

let server2 = http.createServer(handleNode);

function handleNode(req, res) {
  res.end('My first server in NodeJS');
}

server2.listen(5100, () => {
  console.log('Server is listing to 5100');
});

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

let node = http.createServer(handleReq);

function handleReq(req, res) {
  console.log(req.headers);
  res.end(req.headers['user_agent']);
}

node.listen(5555, () => {
  console.log('Server is listing to 5555');
});

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

let server3 = http.createServer(handleMethods);

function handleMethods(req, res) {
  console.log(req.method, req.url);
  res.end(req.method + req.url);
}

server3.listen(5566, () => {
  console.log('Server is listing to 5566');
});

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

let server4 = http.createServer(handleCb);

function handleCb(req, res) {
  res.end(JSON.stringify(req.headers));
}

server4.listen(7000, () => {
  console.log(' Its 7k server');
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

let server5 = http.createServer(handleStatus);

function handleStatus(req, res) {
  res.statusCode = 202;
  res.end(JSON.stringify(req.headers));
}

server5.listen(3333, () => {
  console.log(' Its 3333 server');
});

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

// let server6 = http.createServer(handleHtml);

// function handleHtml(req, res) {
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h3>Welcome to node JS </h3>');
// }

// server6.listen(8000, () => {
//   console.log(' Its 8k server');
// });

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

let server7 = http.createServer(handleHtmlWrite);

function handleHtmlWrite(req, res) {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.end('<h3>Welcome to node JS </h3>');
}

server7.listen(8000, () => {
  console.log(' Its 8k server');
});

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

let server8 = http.createServer(handleTrue);

function handleTrue(req, res) {
  res.writeHead(201, { 'Content-type': 'application/json' });
  res.end(
    JSON.stringify({
      success: true,
      message: 'welcome to NodeJS',
    })
  );
}

server8.listen(8888, () => {
  console.log(' Its 8888 server');
});

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

let server9 = http.createServer(handlePost);

function handlePost(req, res) {
  console.log(req.method);
  res.writeHead(201, { 'Content-type': 'application/json' });
  res.end(`<h2>posted for first time</h2>`);
}

server9.listen(5050, () => {
  console.log(' Its 5050 server');
});

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

let server10 = http.createServer(handleDbl);

function handleDbl(req, res) {
  if ((req.method === 'GET', req.url === '/')) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
  } else if ((req.method === 'GET', req.url === '/about')) {
    res.setHeader('Content-type', 'text/html');
    res.end('<h2>posted for first time again</h2>');
  } else {
    res.statusCode = 404;
    res.end('Page not Found');
  }
}

server10.listen(2345, () => {
  console.log(' Its 2345 server');
});

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

let server11 = http.createServer(handleSameRoute);
var fs = require('fs');

function handleSameRoute(req, res) {
  if ((req.method === 'GET', req.url === '/users')) {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(`./form.html`).pipe(res);
  }
  if ((req.method === 'POST', req.url === '/users')) {
    res.end('Posted for the second time');
  }
}

server11.listen(2244, () => {
  console.log(' Its 2244 server');
});

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

var url = require('url');

var server12 = http.createServer(handleData);

function handleData(req, res) {
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parsedUrl.query));
}

server12.listen(1100, () => {
  console.log('Its 1100 server');
});
