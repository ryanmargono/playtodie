const router = require('express').Router();
const User = require('../db').User

// endpoint for getting user data (pulling resturant history and preferences on login)
router.get('/', (req, res, next) => {

});

router.post('/', ({ body }, res, next) => {
    User.findOne({ username: body.username }, (err, user) => {
        if (user) {
            if (user.password == body.password) res.json(user)
            else res.json({ error: 'email is taken and incorrect password was supplied.' })
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
    const id = req.params.id
    User.findOne({ _id: id }, (err, user) => {
        user.settings = req.body
        user.save(err => {
            if (err) res.json({ error: err })
            else res.json(user)
        })
    })

});

module.exports = router;