
const mongoose = require('mongoose');
// const { Schema } = mongoose;


// Define the sub-schema for evalue
const evalueSchema = new mongoose.Schema({
    star: { type: String, required: true },
    comment: { type: String, required: true },
    idUser: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const DishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    chef: {
        type:[String],
        require: true
    },
    description: {
        type: String,
        required: true
    },
    evalue: [evalueSchema], // Use the sub-schema here
    image: {
        type:[String],
        require: true
    },
    price: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// const Dish = mongoose.model('Dish', dishSchema);
module.exports = mongoose.model('Dish', DishSchema,'dish');
// module.exports = Dish;

