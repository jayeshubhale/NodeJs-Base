const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        myReferralId: {
            type: String,
        },
        mobileNumber: {
            type: String,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        pincode: {
            type: String,
        },
        village: {
            type: String,
        },
        taluka: {
            type: String,
        },
        district: {
            type: String,
        },
        state: {
            type: String,
        },
        profileImage: {
            type: String,
            default: "/uploads/Profile_1.jpg",
        },
        adminType: {
            type: String,
            default: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
