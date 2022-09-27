const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const path = require('path')
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
    res.send({ Hei: 'Hei' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})