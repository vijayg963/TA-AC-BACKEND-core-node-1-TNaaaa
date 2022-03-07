let area = require('./area');

let circle_area = area.circle(8);

console.log(circle_area);

let buffer1 = Buffer.alloc(12);
let buffer2 = Buffer.allocUnsafe(12);

buffer1.write('Hello World');
console.log(buffer1.toString());
