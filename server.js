const express = require('express');
const app = express();
const mysql = require('mysql2');
const myconnection = require('express-myconnection');
const cors = require('cors')

app.set('port', process.env.PORT || 9000);


const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'abc123',
    database: 'pokemon',
}