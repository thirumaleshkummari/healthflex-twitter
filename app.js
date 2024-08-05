const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/twitter_clone', { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/users');
const tweetRoutes = require('./routes/tweets');

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
