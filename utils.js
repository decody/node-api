// 첫번째 문자열 대문자로 변환
function capitalize(str) {
    //return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
    capitalize: capitalize
};