const {eventSchema} = require('./Event')

const mongoose = require('mongoose');


const {userSchema} = require('./User')

const winnerSchema = new mongoose.Schema(
    {
        user: [userSchema],
        event: [eventSchema]
    },
);

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = { Winner, winnerSchema };