const { get } = require("http");
const table = require("../models/table.js");
const mongoose = require('mongoose');

const Booking = async (req, res, next) => {
    try {
        const newBooking = {
            ...req.body,
            _id: new mongoose.Types.ObjectId()
        };
        await table.updateOne(
            { "_id": req.params.id },
            {
                $push: {
                    "booking": newBooking
                },
            }
        );
        res.status(200).json("Booking success");
    } catch (err) {
        next(err);
    }
};

const deleteBooking = async (req, res, next) => {
    try {
        await table.updateOne(
            { "booking._id": new mongoose.Types.ObjectId(req.params.idBooking) },
            {
                $pull: {
                    "booking": { _id: new mongoose.Types.ObjectId(req.params.idBooking) }
                }
            }
        );
        res.status(200).json("Booking has been deleted.");
    } catch (err) {
        console.error("Cancel delete", err);
        next(err);
    }
};

const updateBooking = async (req, res, next) => {
    try {
        const filter = { "booking._id": new mongoose.Types.ObjectId(req.params.idBooking) };

        const update = {};
        for (const key in req.body) {
            update[`booking.$.${key}`] = req.body[key];
        }
        await table.updateOne(filter, { $set: update });

        res.status(200).json("Booking has been updated.");
    } catch (err) {
        console.error("Error updating booking", err);
        next(err);
    }
};

  const getBooking = async (req, res, next) => {
    try {
      const userId  = req.params.idUser;

      if (!userId) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const bookings = await table.find({ "booking.user": userId }).exec();
      if (!bookings || bookings.length === 0) {
        return res.status(404).json({ message: "No bookings found for this user" });
      } 
      res.status(200).json(bookings);
    } catch (err) {
      console.error("Error getting booking by user:", err);
      next(err);
    }
  };

  const getBookings = async (req, res, next) => {
    try {
        const tables = await table.find();
        const bookings = tables.flatMap(table => table.booking);
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    Booking,
    getBooking,
    getBookings,
    deleteBooking,
    updateBooking
};