const Sports = require('../models/sportModel');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const CarTrade = require('../models/carTradeModel'); // Assuming you have a model for CarTrade

// ------------------------------------------------------------------------------------
// Add Sports Data
const addSportsNameController = async (req, res) => {
    console.log(req.body);
    try {
        const { sportname, description, categories } = req.body;
        const myimages = req.files && req.files[1] ? req.files[1].filename : null;

        console.log("Received form data:", req.body);

        const newSportsData = new Sports({
            sportname,
            description,
            image: myimages,
            categories
        });

        console.log("Attempting to save data:", newSportsData);

        const savedDataSports = await newSportsData.save();

        console.log("Data saved successfully:", savedDataSports);

        res.status(200).send({
            success: true,
            message: 'Data Received and Saved Successfully',
            data: savedDataSports,
        });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

// ------------------------------------------------------------------------------------
// Get All Sports Data
const getAllSportsDataController = async (req, res) => {
    try {
        const allSportsdata = await Sports.find();

        res.status(200).send({
            success: true,
            message: "Sports data retrieved successfully",
            data: allSportsdata
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(400).send({
            success: false,
            message: "Failed to fetch sports data"
        });
    }
};

// ------------------------------------------------------------------------------------
// Add Car Data
const carAdd = async (req, res) => {
    try {
        const { car_code, company, model, price } = req.body;
        const newCarTrade = new CarTrade({ car_code, company, model, price });

        const savedCarTrade = await newCarTrade.save();

        res.status(201).json({
            success: true,
            message: 'Car data added successfully',
            data: savedCarTrade,
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// ------------------------------------------------------------------------------------
// Export Controllers
module.exports = {
    addSportsNameController,
    getAllSportsDataController,
    carAdd
};
