const express = require('express');

const router = express.Router();

const Day = require('../models/Day');

// POST DAY

router.post('/', (req, res) => {

  const newDay = new Day({
	days: req.body.date,
	dishes: req.body.dishes
  });

  newDay.save()

    .then(() => Day.find())

    .then(days => res.json(days));
});

// GET ALL DAYS

router.get('/', (req, res) => {
	Days.find()
	  .then()
	  .then(days => res.json(days));
  });
