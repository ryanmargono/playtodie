const router = require('express').Router();

// endpoint for making yelp api calls. Made serverside since there is a client secret that shouldn't be available on the front end.
router.post('/api/yelp', (req, res, next) => {

});

module.exports = router;