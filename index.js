const express = require("express");
const { CLIENT_RENEG_LIMIT } = require("tls");
const app = express();
const mongoose = require("mongoose");
const dotenv =require("dotenv");
const userRouter = require("./routes/user")

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Db is connected")).catch((err)=>console.log(err));

app.use("/user", userRouter);

app.listen(5000, ()=>{
    console.log("Server is running");
})