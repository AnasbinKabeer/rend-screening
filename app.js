// app.js

const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./rendezvous-23-firebase-adminsdk-qeeew-0d85d5167e.json');

const app = express();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rend-result-default-rtdb.firebaseio.com',
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
