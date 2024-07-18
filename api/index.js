// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// dotenv.config();

// const app = express();
// const PORT = 8800;

// const uri = 'mongodb+srv://huyenvtt1440101226646:<Ov13eqf7uCMekCYW>@restaurant.ujbi6oi.mongodb.net/restaurant?retryWrites=true&w=majority&ssl=true';
// async function connect() {
//     try {
//       await mongoose.connect(uri, {        
//         ssl: true,
//         tlsAllowInvalidCertificates: true
//       });
//       console.log('Successfully connected to MongoDB');
//     } catch (error) {
//       console.error('Connection error', error);
//       process.exit(1); 
//     }
//   }
  
  
//   // Gọi hàm kết nối
//   connect();


// // Định nghĩa Schema và Model
// const restaurantSchema = new mongoose.Schema({
//   name: String,
//   cuisine: String,
//   address: String,
//   // Các trường khác cần thiết
// });
// const Restaurant = mongoose.model('Restaurant', restaurantSchema);
// // Route để truy vấn nhanh dữ liệu của collection restaurants
// app.get('/api/restaurants', async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find();
//     return res.json({
//       success: true,
//       restaurants: restaurants
//     });
//   } catch (error) {
//     console.error('Error fetching restaurants', error);
//     return res.status(500).json({
//       success: false,
//       message: 'Failed to fetch restaurants',
//       error: error.message
//     });
//   }
// });

// // Middleware và cấu hình ứng dụng Express
// app.use(cookieParser());
// app.use(express.json());
// app.use(cors());

// // Error handler middleware
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack
//   });
// });

// // Bắt đầu server
// app.listen(PORT, () => {
//   connect();
//   console.log(`Connected to backend. Listening on port ${PORT}`);
// });

// // const express = require("express");
// // const dotenv = require("dotenv");
// // const mongoose = require("mongoose");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 8800;

// // const uri = process.env.MONGO_URI;

// // async function connect() {
// //   try {
// //     await mongoose.connect(uri, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //       tlsAllowInvalidCertificates: true
// //     });
// //     console.log('Successfully connected to MongoDB');
// //   } catch (error) {
// //     console.error('Connection error', error);
// //     process.exit(1); // Dừng ứng dụng nếu không thể kết nối với MongoDB
// //   }
// // }

// // // Gọi hàm kết nối khi ứng dụng khởi động
// // connect();

// // // Middleware và cấu hình ứng dụng Express
// // app.use(cookieParser());
// // app.use(express.json());
// // app.use(cors());

// // // Error handler middleware
// // app.use((err, req, res, next) => {
// //   const errorStatus = err.status || 500;
// //   const errorMessage = err.message || "Something went wrong!";
// //   return res.status(errorStatus).json({
// //     success: false,
// //     status: errorStatus,
// //     message: errorMessage,
// //     stack: err.stack
// //   });
// // });

// // // Bắt đầu server
// // app.listen(PORT, () => {
// //   console.log(`Connected to backend. Listening on port ${PORT}`);
// // });





const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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



