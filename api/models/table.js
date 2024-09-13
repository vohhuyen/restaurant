<<<<<<< HEAD
const mongoose = require('mongoose');
const TableSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    chair: {
      type: Number,
      required: true,
    },
    description:{
      type: String,
    },
    area:{
      type: String,
    },
    image: [
        String,
    ],
    // booking: [
    //     {
    //         user: {type: String},
    //         // time: { type: Date},
    //         dish: [String],
    //         totalmoney: {type: Number},
    //         type: {type: String},
    //         startTime: {type: Date},
    //         endTime: {type: Date}
    //     }
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", TableSchema);
=======
const mongoose = require('mongoose');
const TableSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description:{
      type: String,
    },
    image: [
        String,
    ],
    booking: [
        {
            user: {type: String},
            time: { type: Date},
            dish: [String],
            totalmoney: {type: Number},
            type: {type: String, default: "new"}
        }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", TableSchema);
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
