const mongoose = require('mongoose');
const connection = async()=>{
     mongoose.connect(process.env.URL)
    .then((conn)=>{
        console.log(`MongoDB Connected...`);
    })
    .catch((err)=>{
        console.error("Error Connecting to MongoDB", err);
    })
}
module.exports = connection