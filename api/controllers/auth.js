const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error.js");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Tạo tên file duy nhất
    }
});
const upload = multer({ storage: storage });

const register = async (req, res, next) => {
<<<<<<< HEAD
    console.log("body", req.body);
=======
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
    try {
        upload.single('img')(req, res, async function (err) {
            if (err) {
                return next(err);
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                ...req.body,
                password: hash,
                img: req.file ? `uploads/${req.file.filename}` : null, 
            });

            await newUser.save();
<<<<<<< HEAD
            res.status(200).json({ newUser });
=======
            res.status(200).send("User has been created.");
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
        });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or email!"));

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("auth_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        })
        .status(200)
        .json({ token , details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
};
<<<<<<< HEAD
const checkEmailExists = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email }); // Tìm kiếm người dùng với email
    if (user) {
      return res.status(200).json({ exists: true });
    }
    return res.status(200).json({ exists: false });
  };
  
module.exports = {
    register,
    login,
    checkEmailExists
=======

module.exports = {
    register,
    login,
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
};
