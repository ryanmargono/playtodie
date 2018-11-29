const router = require('express').Router();
const Restaurant = require('../db').Resturant

// endpoint for getting resturant data (pulling information on resturant when looking at history)
router.get('/', (req, res, next) => {
    Restaurant.find({}, (err, rests)=> res.json(rests))
});

// endpoint for adding resturant
router.post('/', (req, res, next) => {
    Restaurant.create(req.body, (err, rest) => res.json(rest))
});

module.exports = router;
