const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema(
    {
        sportname: {
            type: String,
            required: [true, 'Please provide a sports name']
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        categories: {
            type: Array
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Sports', sportsSchema);
