
// Module. logger.js => showLogMessage

// logger.js 모듈을 불러온다.
const logger = require('./logger');

logger.showLogMessage('모듈에 대한 테스트 중입니다');
logger.showLogMessage2('두번째 모듈에 대한 테스트 중입니다');
console.log('Logger 모듈에 대한 소중한 값은: ' +logger.pvalue);



// Module




// 3초에 한 번씩 주기적으로
// setInterval(() => {
//     console.log('Node.js 연습중입니다');
// }, 3000);

// setTimeout(() => {
//     console.log('타임아웃 한번만 실행');
// }, 3000);


// 함수
// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('john');
// sayHello('allice');

// const v = 10;

// if (v > 5) {
//     console.log('It is a big number')
// }
// else {
//     console.log('작은 숫자야!!');
// }