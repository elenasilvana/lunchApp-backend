const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersRateSchema = Schema({
    //user, date, comment, rating
    user: {
        type: String
    },
    date: {
        type: Number
    },
    comment: {
        type: String
    },
    rating: {
        type: Number
    }
});

module.exports = mongoose.model('UsersRate', UsersRateSchema);