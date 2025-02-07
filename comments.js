// Create web server
// Create a web server that listens to the port 3000 and returns the comments.json file.

// Use the createServer method from the http module and send the comments.json file as a response.
// The comments.json file is located in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.createReadStream('./comments.json').pipe(res);
}).listen(3000);

console.log('Server running at http://localhost:3000/');