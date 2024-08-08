

// import Dish from "../models/dish.js";
const Dish = require('../models/dish');

//CREATE
const createDish = async (req, res, next) => {
    const newDish = new Dish(req.body);
    
    try {
        const saveDish = await newDish.save();
        res.status(200).json(saveDish);
    } catch (err) {
        next(err);
    }
}

//GET
const getDish = async (req, res, next) => {
    try {
        console.log("Fetching Dish with ID:", req.params.id);
        const dish = await Dish.findById(req.params.id);
        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }
        res.status(200).json(dish);
    } catch (err) {
        console.error("Error fetching Dish:", err);
        next(err);
    }
}

//GET ALL
const getDishs = async (req,res,next)=>{
    try{
        const Users = await Dish.find();
        res.status(200).json(Users)
    }catch(err){
        next(err);
    }
}


//find BY TYPE
const findDishByType = async (req, res, next) => {
    try {
        // Lấy loại món ăn từ tham số URL
        const type = req.params.type;

        // Tìm các món ăn có loại tương ứng
        const dishFind = await Dish.find({ type: type });

        // Trả về kết quả dưới dạng JSON
        res.status(200).json({ success: true, data: dishFind });
    } catch (err) {
        // Chuyển lỗi đến middleware xử lý lỗi
        next(err);
    }
};


//UPDATE
const updateDish = async (req, res, next) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );        
        res.status(200).json(updatedDish);
    } catch (err) {
        res.status(500).json({ err });
    }
}

//DELETE
const deleteDish = async (req, res, next) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(200).json("Dish has been deleted.");
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createDish,
    getDish,
    getDishs,
    findDishByType,
    updateDish,
    deleteDish
}
