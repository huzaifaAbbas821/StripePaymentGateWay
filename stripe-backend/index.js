const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env' : '.env' });

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  if(amount)
  console.log(amount);
else console.log('asdas');

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
