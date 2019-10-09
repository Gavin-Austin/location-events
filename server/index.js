require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_LOCATIONS_QUERY = 'SELECT * from locations';

const connection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the server :)');
});

app.listen(4000, () => {
    console.log(`Server listening on port 4000`)
});
