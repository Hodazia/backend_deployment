const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req,res) => {
    res.json({'message':'Welcome to the root user'})
})

app.get("/about", (req,res) => {
    res.json({"Project":"tutorial_deployment","backend":"true"})
})

// POST /info {username,password} -> response {username,password}
app.post("/info", (req,res) => {
    const {username, password} = req.body;
    res.json({username:username,password:password});
})
app.listen(3000 ,() => {
    console.log("we are listening to a port");
})