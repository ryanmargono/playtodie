# Random Eats

## Overview

Often, finding a place to eat can be a difficult process. Whether it's due to having too many options or not knowing whats out there, finding a resturant to dine in can be a cumbersome process. Random Eats aims to solve this problem by making the decision for its users.

Random Eats is a web application that finds a random resturant near a user tailored by their unique settings. Users can register and log in. Afterwards, they can tailor their preferences (type of cuisine, distance, rating) in their settings. Finally, with the click of a button a random resturant will be generated for them based on their settings. The user can either select it or generate a new one. In addition, a list of their selected resturants will be saved in case they find a place they especially enjoy.

## Data Model

The application will store Users and Resturants. 

Users can have multiple resturants (via references).

Example User:

```javascript
{
  username: // a string,
  password: // a string,
  history: // an array of references to Resturant documents
}
```

Example Resturant:

```javascript
{
  name: // a string,
  cuisine: // a string,
  rating: // an integer,
  address: // a string
}
```

### Initial First Draft Schema

## Wireframes and Sitemap

/signup - page for users to sign up.

![alt text](https://raw.githubusercontent.com/nyu-csci-ua-0480-001-003-fall-2018/ryanmargono-final-project/master/documentation/signup.JPG?token=Aa-PvAQpqGwyk-dEpGDGGhLzoG3SY-OJks5b6jCQwA%3D%3D)

/ - starting page for users to log in.

/dashboard - immediate page after logging in, has all the app's funcationalities (generating random resturant, view previous resturants, links to settings).

![alt text](https://raw.githubusercontent.com/nyu-csci-ua-0480-001-003-fall-2018/ryanmargono-final-project/master/documentation/home-and-dash.JPG?token=Aa-PvMzEgkMlSIwnRaGF4j6sni_qmOcHks5b6jBrwA%3D%3D)

/settings - page for users to customize their preferences.

![alt text](https://raw.githubusercontent.com/nyu-csci-ua-0480-001-003-fall-2018/ryanmargono-final-project/master/documentation/settings-and-sitemap.JPG?token=Aa-PvJW91lX3LgvQseU0rUIv-fOkdHX2ks5b6jB_wA%3D%3D)

## User Stores

1. as a non-registered user, I can register a new account with the site.
2. as a registered user, I can log in to the site.
3. as a registered user, I can customize my settings (location, cuisine preference, etc.).
4. as a registered user, I can view my previously selected resturants.
5. as a registered user, I can generate a random resturant and either select it or keep generating random ones.
6. as a registered user, I can edit my previously selected resturants (for such a case where I accidentally selected one).

## Research Topics

(4 points) External APIs: Yelp API and Google Address Autocomplete API

(6 points) Client-Side JS Library: ReactJS

(5 points) User Authentication: express-basic-auth

(4 points) Client-Side Form Validation: React-Materialize

Total: 15 points

### Initial Main Project File

## References

https://www.npmjs.com/package/express-basic-auth