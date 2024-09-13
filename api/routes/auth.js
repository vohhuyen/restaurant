const express = require("express");
<<<<<<< HEAD
const { login, register, checkEmailExists } = require("../controllers/auth.js");
=======
const { login, register } = require("../controllers/auth.js");
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
<<<<<<< HEAD
router.post("/checkemail",checkEmailExists);
=======
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db

module.exports = router;
