let fs = require('fs');

fs.readFile('./content.md', 'utf8', (err, content) => {
  console.log(err, content);
});

let inSync = fs.readFileSync('./content.md', 'utf8');

console.log(inSync);

let buff10 = Buffer.alloc(10);
buff10.write('Welcome to Buffer');

console.log(buff10);
