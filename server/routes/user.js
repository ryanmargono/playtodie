const router = require('express').Router();
const User = require('../db').User


// creating a user / logging in
router.post('/', ({ body }, res, next) => {
    User.findOne({ username: body.username }, (err, user) => {
        if (user) {
            if (user.password == body.password) res.json(user)
            else res.json({ error: 'username is taken and incorrect password was supplied.' })
        }
        else {
            User.create({ ...body, settings: null }, (err, user) => {
                if (err) res.json({ error: err })
                else res.json(user)
            })
        }
    })
})

// endpoint for updating user data (editing resturant history and changing preferences)
router.put('/:id', (req, res, next) => {
    if (!req.headers.auth) {
        res.sendStatus(403)
    }
    const id = req.params.id
    if (req.body.rest) {
        User.findOne({ _id: id }, (err, user) => {
            if (user._id.toString() !== req.headers.auth) res.sendStatus(403)
            else {
                user.visited = [req.body.rest, ...user.visited]
                user.save(err => {
                    res.json(user)
                })
            }
        })
    }
    else {
        User.findOne({ _id: id }, (err, user) => {
            if (user._id.toString() !== req.headers.auth) res.sendStatus(403)
            else {
                user.settings = req.body
                user.save(err => {
                    if (err) res.json({ error: err })
                    else res.json(user)
                })
            }
        })
    }
});

module.exports = router;