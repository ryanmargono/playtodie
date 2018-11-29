const router = require('express').Router();
const Yelp  = require('yelp-fusion')
const client = Yelp.client('AaD_naVjnhWBRPhZ6qv_qHFsrjiUzSa5phojqV33RT228wsa6g9FqW2opTA84NzxbYRjba8XJVigiCnGYZSquxSowKlhidAEyQD5P2VR6ffO_W0HB3-Jm0blJgP-W3Yx')

const getDistance = code => {
  switch(code){
      case 0:
          return 1600
      case 1:
          return 5000
      case 2:
          return 15000
  }
}

const getCuisine = cats => {
  const result = []
  cats.forEach(cat => result.push(cat.alias))
  return result.join(', ')
}

// endpoint for making yelp api calls. Made serverside since there is a client secret that shouldn't be available on the front end.
router.post('/', (req, res, next) => {
    let { zipcode, distanceCode, cuisineTypes } = req.body
    if (typeof cuisineTypes==='string') cuisineTypes = [cuisineTypes]
    const query = {
      location: zipcode,
      radius: getDistance(distanceCode),
      categories: cuisineTypes.join(',')
    }
    client.search(query)
      .then(response => {
        const results = response.jsonBody.businesses
        const randomIndex = Math.floor(Math.random() * results.length)
        const result = results[randomIndex]
        result.cuisineTypes = getCuisine(result.categories)
        res.json(result)
      });
});

module.exports = router;