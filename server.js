import express, { json } from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//create a app variable to use the cors and cookieparser in express
const app = express();
app.use(cors());
app.use(cookieParser());

//Make a variable db for database connection
// I used mysql database with port 3307 and i already create my employeedb database in my PHP my Admin XAMPP server
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3307',
    database: 'employeedb',
});

//I used this code to test my database connection
db.connect(function(err) {

    if (err) {
        console.log("Error Connection");
    } else {
        console.log("Connected");
    }
});

//I use this code to GET the employee data in MySQL database
app.get('/user', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
});
 

app.listen(8000, ()=> {
    console.log("Listening to port 8000");
});

