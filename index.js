const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UsersRate = require('./routes/api/usersrate');

const daysRoutes = require('./routes/api/days');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.set('useUnifiedTopology', true)
.set('useNewUrlParser', true)
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/days', daysRoutes);
app.use('/api/usersrate', UsersRate);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));