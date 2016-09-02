var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 8080;


var server = http.createServer(function(req, res) {
   
   var path = url.parse(req.url, true).path; //get the path of the request url
   
   if(path === '/') {
       fs.readFile('../client/index.html', function(err, content) {
           if(err) {
               console.error(err, 'index.html not found');
           }
           res.end(content);
       });
   } else { 
   
   //Default case
   var output = {date: null, unixtime: null}; //initial state of output
   path = path.slice(1,path.length); //get just the path w/o the '/'
   
   //1st attempt
   var date = new Date(path); //try first time as human-readable
   if(date.toString() !== "Invalid Date") {
       output = {date: date.toLocaleDateString(), unixtime: date.valueOf()};
   } else {
       
       //2nd attempt
       date = new Date(parseInt(path)); //try second time as unix
       if(date.toString() !== "Invalid Date") {
            output = {date: date.toLocaleDateString(), unixtime: date.valueOf()};
       }
   }
   output = JSON.stringify(output);
   res.end(output);
   }
});

server.listen(port);