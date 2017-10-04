import * as firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: 'teocode-biblion.firebaseapp.com',
  databaseURL: 'https://teocode-biblion.firebaseio.com',
  storageBucket: 'bucket.appspot.com',
};

firebase.initializeApp(config);
const database = firebase.database();

exports.searchTerm = function searchTerm(req, res) {

};
