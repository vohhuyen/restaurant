
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dishRoute = require('./routes/dish');
const newRoute = require('./routes/new');
// const blogRoute = require('./routes/blog');


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
app.use("/api/dish", dishRoute);
app.use("/api/new", newRoute);
// app.use("/api/blog", blogRoute);


const News = mongoose.model('News', new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
  }));

app.get('/api/news', async (req, res) => {
    try {
      // Truy xuất tất cả các tin tức từ bảng 'news'
      const newsList = await News.find({});
      // Gửi danh sách tin tức dưới dạng JSON
      res.json(newsList);
    } catch (error) {
      // Xử lý lỗi nếu có
      res.status(500).json({ message: 'Lỗi khi lấy dữ liệu tin tức', error });
    }
  });


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



