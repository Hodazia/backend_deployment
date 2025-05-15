const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.status(204).json({'message':'Welcome to the root user'})
})

app.get("/about", (req,res) => {
    res.status(204).json({"Project":"tutorial_deployment","backend":"true"})
})
app.listen(3000 ,() => {
    console.log("we are listening to a port");
})