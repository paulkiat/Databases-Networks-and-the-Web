// The index.js file of your application
var http = require("http");
var dateTime = require("./module");

http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("The date and time are currently:" + dateTime.myDateTime() + "\n");
  res.end("hello World again!");
}).listen(8082, function(){
  console.log("Node server is runing...");
});