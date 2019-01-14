import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAkETBWHzZcZqQsEZYAbq7ecYcfbYQJqwU",
  authDomain: "playtodie-86708.firebaseapp.com",
  databaseURL: "https://playtodie-86708.firebaseio.com",
  projectId: "playtodie-86708",
  storageBucket: "playtodie-86708.appspot.com",
  messagingSenderId: "252049899666"
};
firebase.initializeApp(config);

export default firebase