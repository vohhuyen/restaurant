
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const usersRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const tableRoute = require("./routes/table.js");

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
      } catch (error) {
        throw(error);
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
});

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/table", tableRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})



