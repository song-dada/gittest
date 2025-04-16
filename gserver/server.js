const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
// const process = 
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

db.connect((err)=>{
    if(err){
        console.error('DB Connect Error : ', err);
    }else{
        console.log('DB Connected!');
    }
})

app.get('/guest', (req, res)=>{
    db.query('SELECT * FROM guest ORDER BY create_at DESC',(err,result)=>{
        if(err){
            console.error('DB SELECT Error : ', err);
        }else{
            res.json(result)
        }
    });
})

app.post('/guest', (req, res)=>{
    const {name, message} = req.body;
    db.query('INSERT INTO guest(name, message) VALUES (?, ?)',[name, message],
        (err,result)=>{
            if(err){
                return res.status(500).send(err)
            }
        }
    );

})

app.listen(8080, ()=>{
    console.log('http://127.0.0.1:8080/guest Connected!');
})