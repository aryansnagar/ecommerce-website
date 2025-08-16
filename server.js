const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const db = new sqlite3.Database("data.db");

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    product TEXT
)`);

app.use(bodyParser.json());

// Save form data
app.post("/save", (req, res) => {
    const { name, email, phone, address, product } = req.body;
    db.run(
        `INSERT INTO customers (name, email, phone, address, product) VALUES (?, ?, ?, ?, ?)`,
        [name, email, phone, address, product],
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
