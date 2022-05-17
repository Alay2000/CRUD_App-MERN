const express = require("express");
const mongoose = require("mongoose");
const app=express();

const cors = require("cors");
const helmet = require("helmet")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(helmet());
app.use(cors());

app.use("/user",require("./routes/user"))

app.get("/",(req,res)=>{
    res.send("Welcome to the Capestone project")
})

app.listen(3000,(e)=>{
    console.log("Connected")
    mongoose.connect("mongodb://localhost/capstone").then((result)=>{
        console.log("Database Connected")
    }).catch((e)=>{
        console.log("Database connection failed")
        console.log(e)
    })
})