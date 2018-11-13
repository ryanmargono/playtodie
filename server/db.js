const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    visited: [Resturant]
});

const Resturant = new mongoose.Schema({
    name: { type: String, required: true },
    cuisine: { type: String, rquired: true },
    rating: { type: Number, required: true },
    address: { type: String, required: true },
});