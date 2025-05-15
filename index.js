const express = require("express");
const app = express();
const dotenv = require("dotenv");
const User = require("./models/user")
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

const connectDB = async () => {
    try{
        const connectdb = await mongoose.connect(process.env.MONGO_URL);
        console.log('DB is connected')
    }
    catch(err)
    {
        console.log('Error connecting to the DB ' , err);
    }
}

// username, password
const username = 'Zia';
const email = 'zhoda315@gmail.com'
const password = '237jkhsfd';
app.get("/", async (req,res) => {
    const newUser=new User({username,email,password})
    const savedUser=await newUser.save();
    res.json(savedUser);
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
    connectDB()
    console.log("we are listening to a port");
})