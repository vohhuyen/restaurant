<<<<<<< HEAD
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Định nghĩa Schema cho món ăn
const NewSchema = new  mongoose.Schema({
  content: {
    type:String,
    required: true
  },
  image: {
    type:[String],
    require: true
},
  slug: {
    type:String,
    required: true,
    unique: true
  },
  title: {
    type:String,
    required: true
  },
  type: {
    type:String,
    required: true
  }
}, { timestamps: true });

// Tạo mô hình từ schema
module.exports = mongoose.model('New', NewSchema);

// module.exports = New;
=======
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Định nghĩa Schema cho món ăn
const NewSchema = new  mongoose.Schema({
  content: {
    type:String,
    required: true
  },
  image: {
    type:[String],
    require: true
},
  slug: {
    type:String,
    required: true,
    unique: true
  },
  title: {
    type:String,
    required: true
  },
  type: {
    type:String,
    required: true
  }
}, { timestamps: true });

// Tạo mô hình từ schema
module.exports = mongoose.model('New', NewSchema);

// module.exports = New;
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
