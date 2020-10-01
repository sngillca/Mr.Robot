const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
// Import Routes (Middlewares)
const productRoute = require('./routes/products');

app.use('/products', productRoute);

// ROUTES 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/products', (req, res) => {
    res.send('Welcome to the product page.');
});


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => console.log('Conneced to DB.')
);

app.listen(port, () => {
    console.log('App is listening on port http://localhost:${port}');
});