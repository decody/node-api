const express = require('express');
const app = express();

function commonMiddeware(req, res, next) {
    console.log('common middleware');
    next(new Error('error ouccered'));
}

function errorMiddleware(err, req, res, next) {
    console.log(err.message);
    // 에러를 처리허거나
    next();
}

app.use(commonMiddeware);
app.use(errorMiddleware);

app.listen(3000, function() {
    console.log('Server is running!!!');
})