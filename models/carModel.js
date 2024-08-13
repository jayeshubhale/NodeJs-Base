const mongoose = require('mongoose');

const carTradeSchema = new mongoose.Schema(
    {
        car_code: {
            type: String,
            required: [true, 'Please provide a car code']
        },
        company: {
            type: String,
            required: [true, 'Please provide a company name']
        },
        model: {
            type: String,
            required: [true, 'Please provide a car model']
        },
        price: {
            type: Number,
            required: [true, 'Please provide a price']
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model('CarTrade', carTradeSchema);
