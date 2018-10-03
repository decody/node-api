// const http = require("http");
// http.ClientServer();

// 모듈 math 불러오기
// const math = require("./math.js");
// const result = math.sum(1, 2);
// console.log(result);

// 동기 형태
// const fs = require("fs");
// const data= fs.readFileSync("data.txt", 'utf8');
// console.log(data);

// 노드JS내에서 비동기 형태를 주로 사용함
const fs = require('fs');
// 콜백함수형태로 해당변수명을 다시 넣어줌
const data = fs.readFile('./readdata.txt', 'utf8', function(err, data) {
    console.log(data);
})
