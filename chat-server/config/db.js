const mongoose = require('mongoose');
const PATH = 'mongodb://localhost:27017/chatDB';

const connectMongoDB = async() => {
    try {
       await mongoose.connect(PATH);
       console.log('Connected to MongoDB');
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB;