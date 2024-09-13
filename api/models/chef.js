<<<<<<< HEAD
const mongoose = require('mongoose');
const ChefSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chef", ChefSchema);
=======
const mongoose = require('mongoose');
const ChefSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chef", ChefSchema);
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
