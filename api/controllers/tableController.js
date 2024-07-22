const Table = require('../models/table');

// CREATE
const createTable = async (req, res, next) => {
    const newTable = new Table(req.body);

    try {
        const saveTable = await newTable.save();
        res.status(200).json(saveTable);
    } catch (err) {
        next(err);
    }
}

// GET
const getTable = async (req, res, next) => {
    try {
        console.log("Fetching with ID:", req.params.id);
        const TableEntry = await Table.findById(req.params.id);
        if (!TableEntry) {
            return res.status(404).json({ message: "Table not found" });
        }
        res.status(200).json(TableEntry);
    } catch (err) {
        console.error("Error fetching Table:", err);
        next(err);
    }
}

// GET ALL
const getTables = async (req, res, next) => {
    try {
        const allTables = await Table.find();
        res.status(200).json(allTables);
    } catch (err) {
        next(err);
    }
}

// UPDATE
const updateTable = async (req, res, next) => {
    try {
        const updateTable = await Table.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        res.status(200).json(updateTable);
    } catch (err) {
        res.status(500).json(err);
    }
}

// FIND BY TYPE
const findTableByType = async (req, res, next) => {
    try {
        const type = req.params.type;
        const TableFind = await Table.find({ type: type });
        res.status(200).json({ success: true, data: TableFind });
    } catch (err) {
        next(err);
    }
}

// DELETE
const deleteTable = async (req, res, next) => {
    try {
        await Table.findByIdAndDelete(req.params.id);
        res.status(200).json("Table has been deleted.");
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createTable,
    getTable,
    getTables,
    findTableByType,
    updateTable,
    deleteTable
}
