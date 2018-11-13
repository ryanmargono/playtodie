const router = require('express').Router();
const User = require('../db').User

// endpoint for getting user data (pulling resturant history and preferences on login)
router.get('/', (req, res, next) => {

});

router.post('/', ({ body }, res, next) => {
    User.findOne({ username: body.username }, (err, result) => {
        if (result) {
            if (result.password == body.password) res.json(result)
            else res.json({ error: 'email is taken and incorrect password was supplied.' })
        }
        else {
            User.create(body, (err, user) => {
                if (err) res.json({ error: err })
                else res.json(user)
            })
        }
    })
})

// endpoint for updating user data (editing resturant history and changing preferences)
router.patch('/', (req, res, next) => {

});

module.exports = router;