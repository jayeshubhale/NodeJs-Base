
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const multer = require('multer');
const path = require('path');
const formidableMiddleware = require('express-formidable')
var bodyParser = require("body-parser")

// Dotenv configuration
dotenv.config();

// DB connection Establish
connectDB();

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));

// -------------------------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "uploads/"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = file.originalname.split(".").pop();
        req.body.image = file.fieldname + "-" + uniqueSuffix + "." + extension;

        cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
    },
});

const upload = multer({ storage: storage });

// ---------------------------------------------

// Route
const testingRoute = require('./routes/testingRoute');
app.use('/', testingRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// POST
app.use('/', upload.array('images', 2), require('./routes/addSports'));

app.get('/', (req, res) => {
    res.status(200).send("Hello...Welcome to HomeScreen");
});

// const PORT = 8000;
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Node Server running on ${PORT}`.bgGreen.bold)
});
