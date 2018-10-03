// index.js가 있는 해당폴더에서 express 설치
// npm install express 
const express = require('express');
const morgan = require('morgan');
const app = express();

function logger(req, res, next) {
    console.log('I am logger');
    next();     // 미들웨어는 next() 함수를 선언해서 다음 작동을 함
}

function logger2(req, res, next) {
    console.log('I am logger2');
    next();
}
// 미들웨어 추가
app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000, function() {
    console.log('Server is running!!!');
})