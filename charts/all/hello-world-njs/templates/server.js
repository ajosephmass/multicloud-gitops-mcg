const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});