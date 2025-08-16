const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors"); 

const app = express();
const db = new sqlite3.Database("costumerdata.db");

db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    product TEXT,
    price TEXT
)`);

app.use(cors());     
app.use(bodyParser.json());

app.post("/save", (req, res) => {
    const { name, email, phone, address, product, price } = req.body;
    db.run(
        `INSERT INTO customers (name, email, phone, address, product, price) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, email, phone, address, product, price],
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send("Database error");
            }
            res.send("Saved successfully");
        }
    );
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
