const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UsersRate = require('./routes/usersrate');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

app.use('/usersrate', UsersRate);

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));