var http = require("http");
const fs = require('fs');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   let some_data = fs.readFileSync('demo_example.html','utf-8');
    response.write(some_data);
   
   // Send the response body as "Hello World"
   response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');