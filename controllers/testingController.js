const testUserController = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send({
            success: true,
            message: "Testing API"
        });
    } catch (error) {
        console.log("Error in Testing Controller: ", error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

module.exports = { testUserController };
