const express = require('express'); // npm i express --save
const app = express();
const PORT = 3000;

// views 경로로 들어오는 요청에 대해서는
// 로컬 폴더 __dirname : main.js가 있는 폴더 위치
// __dirname+'/views/'
app.use('/scripts', express.static(__dirname+'/scripts'));


app.listen(PORT, () => {
    console.log(`${PORT}서버 진행중입니다`);
});

// 처리해주는 루틴들을 추가...
app.get('/', (req, res) => {
    console.log('루트에 대한 요청들어왔음')
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/about', (req, res) => {
    console.log('about에 대한 요청들어왔음')
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/working', (req, res) => {
    console.log('working에 대한 요청들어왔음')
    res.sendFile(__dirname+'/views/working.html')
})