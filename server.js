const express = require("express")
const mysql = require("mysql2")
const path = require("path")

const app = express()

app.use('/public', express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

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
        // console.log("npm run dev")
        res.render("index")
        // res.send("OK ROUTE OPEN")
    })
})

app.listen(8000, () => {
    console.log("server ready, running on http://localhost:8000/")
})