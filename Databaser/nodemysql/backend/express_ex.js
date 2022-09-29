const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dromtorp'
})
db.connect(err => {
    if (err) {
        throw err;
    } else {
        return console.log('Connection created.')
    }

})

app.get('/hei', (req, res) => {
    let sql = 'SELECT * FROM elev';
    db.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})