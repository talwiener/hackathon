var sys = require("sys");
my_http = require("http");

my_http.createServer(function(request,response){
    sys.puts("I got kicked");
    // write header
    response.writeHeader(200, {"Content-Type": "text/plain"});
    // write resp.
    response.write("Hello Emulin\n");
    // send resp.
    response.end();

}).listen(8080);

sys.puts("Server Running on 8080"); 



