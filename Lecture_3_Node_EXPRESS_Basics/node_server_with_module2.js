const http = require('http');

const Imported_Module = require('./module_example2')


http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World' + Imported_Module.ThisFunctionReturnNumberFive() + Imported_Module.ThisFunctionReturnNumberTen() );
}).listen(8080);