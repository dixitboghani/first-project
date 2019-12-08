const fs = require('fs');


let some_data = fs.readFileSync('testing.txt','utf-8');

console.log(some_data);