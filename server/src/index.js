/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const middlewares = require('./middlewares');
const postRoutes = require('./routes/posts');

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Connection to database
const CONNECTION_URL = 'mongodb://127.0.0.1/memory';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((error) => console.error(error.message));

app.use('/posts', postRoutes);

// Routes for catching errors in the future
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
