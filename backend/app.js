const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const authRoute = require("./routes/userAuth");
const Cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(Cors());


async function main() {
    await mongoose.connect("mongodb+srv://niru:w1MfkA0v9wliY9A1@cluster0.ioxez.mongodb.net/ch-ai");
}

main().then(()=>console.log("Database is connected")).catch((err)=>console.log(err));

app.use("/api/v1/user/auth",authRoute);
app.get('/',(req,res)=>{
    res.send("Root");
});

app.listen(PORT,(req,res)=>{
    console.log('app is listening...');
});