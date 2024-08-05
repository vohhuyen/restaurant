const New = require('../models/new');

// CREATE
const createNew = async (req, res, next) => {
    const newNew = new New(req.body);

    try {
        const saveNew = await newNew.save();
        res.status(200).json(saveNew);
    } catch (err) {
        next(err);
    }
}

// GET
const getNew = async (req, res, next) => {
    try {
        console.log("Fetching with ID:", req.params.id);
        const newEntry = await New.findById(req.params.id);
        if (!newEntry) {
            return res.status(404).json({ message: "New not found" });
        }
        res.status(200).json(newEntry);
    } catch (err) {
        console.error("Error fetching New:", err);
        next(err);
    }
}

// GET ALL
const getNews = async (req, res, next) => {
    try {
        const allNews = await New.find();
        res.status(200).json(allNews);
    } catch (err) {
        next(err);
    }
}

//UPDATE
 const updateNew = async (req, res, next)=>{
    try {
        const updateNew = await New.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true, runValidators: true}
        );
        res.status(200).json(updateNew);
    } catch (err){
        res.status(500).json(err);
    }
};



//find BY TYPE
const findNewByType = async (req, res, next) => {
    try {
        // Lấy loại món ăn từ tham số URL
        const type = req.params.type;

        // Tìm các món ăn có loại tương ứng
        const newFind = await New.find({ type: type });

        // Trả về kết quả dưới dạng JSON
        res.status(200).json({ success: true, data: newFind });
    } catch (err) {
        // Chuyển lỗi đến middleware xử lý lỗi
        next(err);
    }
};


//DELETE
 const deleteNew = async (req,res,next)=>{
    try{
        await New.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("New has been deleted.")
    }catch(err){
        next(err);
    }
}

 module.exports = {
    createNew,
    getNew,
    getNews,
    findNewByType,
    updateNew,
    deleteNew
}






