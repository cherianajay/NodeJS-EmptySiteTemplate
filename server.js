var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world! this is a node application ');
    
}).listen(process.env.PORT || 8080);
