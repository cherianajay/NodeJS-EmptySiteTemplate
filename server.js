var http = require('http');

http.createServer(function (req, res) {
    var res1="";
    unirest.post('http://mockbin.com/request')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
  console.log(response.body);
        res1=response.body;
});
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world! this is a node application ' +res1);
    
}).listen(process.env.PORT || 8080);
