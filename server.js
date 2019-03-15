var unirest = require('unirest');
var express = require('express');
var app = express(); 
//http://localhost:3000/_getproduct/8821264 

app.get('/', function(req, res) { 
       
     
       unirest.post('http://mockbin.com/request')
       .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
       .send({ "parameter": 23, "foo": "bar" })
       .end(function (response) {
           console.log(response.body.headersSize)

           res.write(JSON.stringify(response.body));
            res.end();
       });


       
     });
     
     app.listen(process.env.PORT||3000, () => console.log('Example app listening on port !'))

     
