require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("connection Success");
    }catch (error){
        console.error("Connect to db is failed");
        process.exit(1)
    }
}

module.exports = connectDB;