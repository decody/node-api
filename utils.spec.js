// npm install mocha --save--dev 로 모카설치
// node_modules/.bin/mocha 폴더에서 
// mocha c:\practice\node-api\utils.spec.js 실행

// should 모듈 설치 (단위테스트용)
// npm install should --save-dev

// superTest (통합테스트용) 참고
// https://github.com/visionmedia/supertest

const utils = require('./utils');
// const assert = require('assert'); nodejs 기본 모듈
const should = require('should');

describe('utils.js모듈의 capitalize()함수는', ()=> {
    it('문자열의 첫번째문자를 대문자로 변환한다', () => {
        const result = utils.capitalize('hello');
        // assert.equal(result, 'Hello');
        result.should.be.equal('Hello');
    })
})