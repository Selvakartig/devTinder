const express = require("express")

const app = express()

app.get("/user", (req, res) => {
    res.send({
        firstName: "Selvakartig",
        lastName: "Kanagaraj"
    })
})

app.post("/user", (req, res) => {
    //DB Logic
    res.send("Data saved successfully to the Database!")
})

app.delete("/user", (req, res) => {
    res.send("Data has been deleted!")
})

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
