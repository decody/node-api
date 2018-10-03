// curl -X GET "127.0.0.1:3000/users" -v 로 확인
var express = require('express');
var app = express();
var morgan = require('morgan');
// npm install body-parser --save 로 익스프레스 body parser 모듈 설치
var bodyParser = require('body-parser');

var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'david'},
    {id: 1, name: 'chris'},
];

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for pasrsing application/-xwww-form-urlencoded

app.get('/users', function(req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);  // 문자열 "2" -> 숫자형으로 변환
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    } 
    // res.json(users);
    res.json( users.slice(0, limit) );
});

app.get('/users/:id', function(req, res) {
    const id = parseInt(req.params.id, 10); // 문자열"1"를 정수형으로 반환
    if (Number.isNaN(id)) return res.status(400).end();
    // users를 배열을 filter를 통해서 새로운 배열로 반환 
    const user = users.filter((user) => user.id === id)[0];
    if (!user)  return res.status(404).end();
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    users = users.filter(user => user.id !== id);
    res.status(204).end();
});

app.post('/users', (req, res) => {
    // 익스프레스에서 body 객체를 body-parser 모듈을 설치함
    const name = req.body.name;
    if (!name) return res.status(400).end();

    // id 중복 체크
    const isConfliect = users.filter(user => user.name === name).length;
    if (isConfliect) return res.status(409).end();

    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    const name = req.body.name;
    if (!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    if (isConflict) return res.status(409).end(); 
    
    const user = users.filter(user => user.id === id)[0];
    if (!user) return res.status(404).end();

    user.name = name;

    res.json(user);
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

// index.js 파일을 모듈로 익스포트
module.exports = app;