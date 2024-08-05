const User = require("../models/User.js");
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
const updateUser = async (req, res, next) => {
    try {
        upload.single('img')(req, res, async function (err) {
            if (err) {
                return next(err);
            }
            const updateData = { ...req.body};
            if (req.file) {
                const filePath = req.file.path.replace(/\\/g, '/');
                updateData.img = filePath;            
            }
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: updateData },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json("User not found.");
            }

            res.json(updatedUser);
        });
    } catch (error) {
        next(error);
    }
};



const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};
const getUserByName = async (req, res, next) => {
    try {
        const users = await User.find({ name: { $regex: req.params.name, $options: 'i' } });
        res.status(200).json(users);
    } catch (err){
        next(err);
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getUserByName,
};
