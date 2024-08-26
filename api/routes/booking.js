const express = require("express");
const { Booking, getBooking, getBookings, deleteBooking , updateBooking} = require("../controllers/bookingController.js");

const router = express.Router();

router.put("/booking/:id", Booking);
router.get("/booking/:idUser", getBooking);
router.get("/booking", getBookings);
router.delete("/booking/:idBooking", deleteBooking);
router.put("/booking/update/:idBooking", updateBooking);


module.exports = router;