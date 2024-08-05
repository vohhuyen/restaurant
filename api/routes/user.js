const express = require("express");
const { updateUser,deleteUser,getUser,getUsers, getUserByName } = require("../controllers/users.js");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();
//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GET ALL
router.get("/",verifyAdmin, getUsers);
// GET BY NAME
router.get("/search/:name", verifyAdmin, getUserByName);

module.exports = router;
