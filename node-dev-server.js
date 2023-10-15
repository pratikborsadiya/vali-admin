// Node JS development server for Vali Admin

const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const port = process.argv[2] || 8888;

http.createServer(function (request, response) {
	var uri = url.parse(request.url).pathname,
		filename = path.join(process.cwd(), 'docs', uri);

	var extname = path.extname(filename);
	var contentType = 'text/html';

	switch (extname) {
		case '.js': contentType = 'text/javascript'; break;
		case '.css': contentType = 'text/css'; break;
		case '.ico': contentType = 'image/x-icon'; break;
		case '.svg': contentType = 'image/svg+xml'; break;
	}

	fs.exists(filename, function (exists) {
		if (!exists) {
			response.writeHead(404, { "Content-Type": "text/plain" });
			response.write("404 Not Found\n");
			response.end();
			return;
		}

		if (fs.statSync(filename).isDirectory()) filename += '/index.html';

		fs.readFile(filename, "binary", function (err, file) {
			if (err) {
				response.writeHead(500, { "Content-Type": "text/plain" });
				response.write(err + "\n");
				response.end();
				return;
			}
			response.writeHead(200, { 'Content-Type': contentType });
			response.write(file, "binary");
			response.end();
		});
	});
}).listen(parseInt(port, 10));

console.log("Server is running on http://localhost:" + port);
