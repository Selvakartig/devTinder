const express = require("express")

const app = express()

app.use("/user", 
    (req, res, next) => {
    console.log("Route Handler 1");
    // res.send("Response 1!")
    next();  
},(req, res, next) => {
    console.log("Route Handler 2");
    // res.send("Response 2!")
    next()   
},(req, res, next) => {
    console.log("Route Handler 3");
    res.send("Response 3!")   
})

app.listen(1111, () => {
    console.log("Server has been listening in port 1111..." );
})
