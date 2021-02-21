const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51IJHBiKKhMRrOGyM0QeVMYAWJncyoKZo8oniJTiMWvlm5dt271OaYtgCKOprw7Sa5d5jVZAtbtqf9J0rD9jXtNCp00s2s2TLIR'
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello!');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
//http://localhost:5001/igotfiveonit-87979/us-central1/api
