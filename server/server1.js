var sys = require("sys");
var fs  = require("fs");
var my_http = require("http");

my_http.createServer(function(request,response){
    sys.puts("I got kicked");
    // write header
    response.writeHeader(200, {"Content-Type": "text/html"});
    // write resp.
    fs.readFile("homePage.html", function(err, data){
    	// write data
 	 	response.write(data);
 	 	// send resp.
  		response.end();
	});

}).listen(8080);

sys.puts("Server Running on 8080"); 



