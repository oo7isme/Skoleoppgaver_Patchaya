const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

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

app.get('/start', (req, res) => {
    res.send('Goodbye world...')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})