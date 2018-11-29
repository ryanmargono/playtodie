const router = require('express').Router();
const Restaurant = require('../db').Resturant
const User = require('../db').User

// endpoint for getting resturant data (pulling information on resturant when looking at history)
router.get('/', (req, res, next) => {
    Restaurant.find({}, (err, rests) => res.json(rests))
});

// endpoint for adding resturant
router.post('/', (req, res, next) => {
    if (!req.headers.auth) res.sendStatus(403)
    User.findOne({_id: req.headers.auth }, (err, user) => {
        if (!user || user.username !== req.body.username) res.sendStatus(403)
        else Restaurant.create(req.body, (err, rest) => res.json(rest))
    })
});

module.exports = router;
