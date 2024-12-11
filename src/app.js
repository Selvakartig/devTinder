const express = require("express")

const app = express()

app.use("/test", (req, res) => {
    res.send("Test Test!");   
})

app.use("/hello", (req, res) => {
    res.send("Hello Hello!");   
})

app.use("/", (req, res) => {
    res.send("Welcome to server kartig!!");   
})

app.listen(1111, () => {
    console.log("Server has been listening in port 1111..." );
})
