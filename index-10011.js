const http = require('http');

const hostname = '127.0.0.1';
const port = 2000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('User list');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// 서버를 요청대기상태로 만듬
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 또다른 cmd모드에서 curl -X GET 'localhost:3000' 확인
// curl -X GET '127.0.0.1:3000/users'