const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'LoginSystem',
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    db.query('INSERT INTO users (name, password) VALUES (?,?)', 
        [name, password], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
})

app.listen(3001, ()=> {
    console.log("Server running on port 3001");
});