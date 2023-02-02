const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// app dependencies
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// controller imports
const postController = require('./controllers/post-controller');
const commentController = require('./controllers/comment-controller');

require('dotenv').config();
require('./config/db.connection'); // node runs all of the code in db.connection

const { PORT } = process.env;

// express / app middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors helper function
app.use(cors()); // allows for cross origin request - open channel
// morgan request logger (for dev)
app.use(morgan('dev'));
// router middleware
app.use('/post', postController);
app.use('/comment', commentController);

// root - home / index route for api - redirects to the post index route
app.get('/', (req, res) => res.redirect('/post'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
