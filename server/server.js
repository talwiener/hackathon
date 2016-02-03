var my_http = require("http");
var url     = require("url");

function start(route, handlers)
{
	my_http.createServer(function(request,response)
	{
	var postData;
        var pathName = url.parse(request.url).pathname;
    	console.log("Request for " + pathName + " received");
    	request.setEncoding("utf8");

	request.addListener("data", function(chunk)
		{
		postData += chunk;
		}
	);
	request.addListener("end", function(chunk)
                {
                route(handlers, pathName, response, postData);
                }
        );

	}).listen(8081);

	console.log("Server Running on 8080");
}

exports.start = start;
