const express = require('express');
const mysql = require('mysql'); // npm i mysql
const path = require('path');
const serveStatic = require('serve-static');
const dbconfig = require('./config/dbconfig.json');
const PORT = 3000;

// Database connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    debug: false
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', serveStatic(path.join(__dirname, 'public')));

app.post('/process/adduser', (req, res) => {
    console.log('/process/adduser 호출됨', req.body);

    const paramId = req.body.id;
    const paramName = req.body.name;
    const paramAge = req.body.age;
    const paramPassword = req.body.password;

    pool.getConnection((err, conn) => {
        if (err) {
            console.error('Mysql getConnection error:', err);
            res.status(500).send('DB 서버 연결 실패');
            return;
        }

        console.log('데이터베이스 연결 얻음');

        const sql = 'INSERT INTO users (id, name, age, password) VALUES (?, ?, ?, ?)';
        conn.query(sql, [paramId, paramName, paramAge, paramPassword], (err, result) => {
            conn.release();
            if (err) {
                console.error('SQL 실행 오류:', err);
                res.status(500).send('SQL query 실행 실패');
                return;
            }

            console.log('SQL 실행 결과:', result);
            if (result.affectedRows > 0) {
                console.log('사용자 추가 성공');
                res.status(200).send('<h2>사용자 추가 성공</h2>');
            } else {
                console.log('사용자 추가 실패');
                res.status(500).send('<h1>사용자 추가 실패</h1>');
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`${PORT} 포트에서 서버 실행중`);
});
