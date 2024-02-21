
// Module logo.js --> showLogMessage

// logo.js 모듈을 불러온다
const logo = require('./logo');

logo.showLogMessage('첫번째 로그메시지');
logo.showLogMessage2('두번째 로그메세지');

console.log('Logger 모듈에 들어있는 소중한 값은 :' + logo.pvalue);

// Module


// 3초에 한 번씩 주기적으로
// setInterval(() => {
//     console.log('Node js 연습중입니다...');
// }, 3000);

// setTimeout(() => {
//     console.log('타임아웃, 한 번만 실행');
// }, 3000);


// 함수
// function sayHello(name) {
//     console.log('Hello '+name);
// }

// sayHello('John');
// sayHello('Alice');

// const v = 10

// if (v > 5) {
//     console.log('It is a big number')
// } else {
//     console.log('작은 숫자야');
// }