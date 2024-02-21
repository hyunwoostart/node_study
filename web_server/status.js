/* 
    HTTP response status code

    sendStatus()

    postman

*/

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // res.sendStatus(200) // OK
    // res.sendStatus(400);   // Bad request, '안녕하세요' -> '엉뚱한말'
    // 403 : forbidden
    // 404 : not found
    // 500 : internal server error
    // 503 : service unavailable
})

app.listen(PORT, () => {
    console.log(`${PORT} 서버 실행중`);
})