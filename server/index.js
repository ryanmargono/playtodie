const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const resturants = require('./routes/resturants');
const users = require('./routes/users');
const yelp = require('./routes/yelp');

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// modularizing routes
app.use('/api/yelp', yelp);
app.use('/api/users', users);
app.use('/api/resturants', resturants);

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// start server
app.listen(8000, () => console.log(`Server listening on port 8000`))