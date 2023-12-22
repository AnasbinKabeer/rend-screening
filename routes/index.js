  // routes/user.js

  const express = require('express');
  const admin = require('firebase-admin');
  const router = express.Router();

  router.get('/', (req, res) => {
    const db = admin.firestore();
    const collectionRef = db.collection('results');

    collectionRef.get()
      .then(snapshot => {
        const data = [];
        snapshot.forEach(doc => {
          data.push(doc.data());
        });

        res.render('index', { data });
      })
      .catch(error => {
        console.error('Error getting documents: ', error);
        res.status(500).send('Internal Server Error');
      });
  });

  module.exports = router;

