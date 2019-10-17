const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DaySchema = new Schema({
	date: { type: Date},
	dishes: {type: Array}
});

const Day = mongoose.model('day', DaySchema);
module.exports = Day;