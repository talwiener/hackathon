var querystring = require("querystring");

function start(response, postData)
{
	console.log("Request handler 'start' was called.");
	var body =
	'<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<input type="text" name="username" rows="1" cols="20"></textarea>'+
	'<input type="submit" value="Submit text" />'+
	'</form>'
	'</body>'+
	'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData)
{
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload\n");
	response.write("user name is: : ");
	if (typeof postData == 'string')
	{

		response.write(querystring.parse(postData).undefinedusername + "\n");
	}
	response.end();
}

exports.start = start;
exports.upload = upload;
