const express = require("express")
const mysql = require("mysql2")

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    database: "prokal-bali",
    user: "root",
    password: "andin06"
})

db.connect((err) => {
    if (err) throw err
    console.log("database connected")
    app.get("/", (req, res) => {
        res.send("OK ROUTE OPEN")
    })
})

app.listen(8000, () => {
    console.log("server ready...")
})