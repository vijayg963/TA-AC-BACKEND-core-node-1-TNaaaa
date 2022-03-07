let os = require('os');

let cpus = os.cpus().length;
let freeM = os.freemem();
let uptime = os.uptime();

console.log('Welcome to Nodejs');
console.log(cpus, freeM, uptime);

let { readFile, unlink, readFileSync, fstat } = require('fs');

var sync = readFileSync('./app.js');

readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});
