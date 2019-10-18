const express = require('express');
const mongoose = require('mongoose');

//models
const UsersRate = require('../models/UsersRate');

app.get('/userrate', (req, res) => {
    res.send('hola mundo');
})