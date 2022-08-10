const express = require('express');
const app = express();
const mysql = require('mysql2');
const myconnection = require('express-myconnection');
const cors = require('cors')

app.set('port', process.env.PORT || 9000);



//database
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'abc123',
    database: 'pokemon',
}
//middlewares--------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
//routes--------------------------------
app.get('/', (req, res) => {
    res.send('working')
})

app.use('/api', routes)
//server running-------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})