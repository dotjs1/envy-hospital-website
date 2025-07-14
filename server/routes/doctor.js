const mongoose = require('mongoose');
const express=require('express');
const routes=express.Router();
// Connecting to MongoDB
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
}
connectDb();
// Defining a Mongoose Schema for the "saves" collection;
const SaveSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema
const SaveModel = mongoose.model("Save", SaveSchema, "saves"); 
// Fetching Data
// async function fetchData() {
//     await connectDb();

//     try {
//         const collectionData = await SaveModel.find(); // Corrected query
//         console.log(collectionData);
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     } finally {
//         mongoose.connection.close(); // Close the connection
//     }
// }

// // Run fetchData
// fetchData();
routes.get('/doctordata',async(req,res)=>{
try{
const collectionData=await SaveModel.find();
console.log(collectionData)
res.status(200).json({message:'data has been extracted successfully',data:collectionData})
} catch (error) {
            console.error("Error fetching data:", error.message);
}
})
module.exports=routes;