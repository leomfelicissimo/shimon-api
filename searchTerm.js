const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const database = admin.firestore();
const bibleCollection = database.collection('bible');

exports.searchTerm = function searchTerm(req, res) {
  bibleCollection.where('NVI', '==', req.param);
};
