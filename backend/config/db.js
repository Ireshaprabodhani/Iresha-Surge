const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const connectDB = async () => {
    try {

       
        // const conn = await mongoose.connect(
        //     {
        //         useUnifiedTopology: true,
        //         useNewUrlParser: true,
                
        //     });

        const conn = await mongoose.connect("mongodb+srv://userIresha99:UserIresha99@cluster2.1ydjnrc.mongodb.net/test")
            .then(() => {
                console.log(`MongoDB Connected`);
            });    

    } catch (error) {
        
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}
    module.exports = connectDB;

