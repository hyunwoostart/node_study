const express = require('express');
const mysql = require('mysql'); // 수정: mysql 모듈 임포트
const path = require('path');
const static = require('serve-static'); // 수정: static 모듈 가져오기
const dbconfig = require('./config/dbconfig.json');

// database connection pool
const pool = mysql.createPool({
    connectionLimit:10,
    host:dbconfig.host,
    user:dbconfig.user,
    password:dbconfig.password,
    database:dbconfig.database,
    debug: false, // 수정: debug 옵션명 수정
    timezone: '09:00' // Asia/Seoul
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', static(path.join(__dirname, 'public'))); // 수정: 폴더 경로 오타 수정

app.post('/chartdatafromdb', (req, res) => {
    console.log('chartdatafromdb 호출됨');

    pool.getConnection((err, conn) => {
        
        const resData = {}
        resData.result = 'error'
        resData.temp = []
        resData.reg_date = []

        if (err) {
            conn.release()
            console.log('Mysql getConnection error. aborted');
            res.json(resData);
            return;
        }

        // data에 데에터를 요청한다.
        const exec = conn.query('select `temperature`, `reg_date` from `Buiding_Temperature` order by `reg_date` asc;',
        (err, rows) => {
            if (err) {
                console.log('Mysql query error. aborted');
                res.json(resData);
                return;
            }

            if (rows[0]) {
                resData.result = 'ok'
                rows.forEach((val) => {
                    resData.temp.push(val.temperature)
                    resData.reg_date.push(val.reg_date)
                })
            }
            else {
                // query는 성공, 그러나 데이터가 없는 경우
                resData.result = 'none'
            }

            return res.json(resData);

        })
    })
})



app.listen(3000, () => {
    console.log('Server stated at 3000');
});
