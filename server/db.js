const mongoose = require('mongoose');

const ResturantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuisine: { type: String, rquired: true },
    rating: { type: Number, required: true },
    address: { type: String, required: true },
});

const SettingsSchema = new mongoose.Schema({
    zipcode: { type: String, required: true },
    cuisineTypes: [String],
    distanceCode: { type: Number }
})

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    settings: SettingsSchema,
    visited: [ResturantSchema]
});

const db = mongoose.createConnection('mongodb://default:default123@ds231588.mlab.com:31588/random-eats')
const User = db.model('User', UserSchema)
const Resturant = db.model('Resturant', ResturantSchema)

module.exports = { User, Resturant }