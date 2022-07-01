require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
    
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('Error connecting to Database');
    });

    db.once('open', () => {
        console.log('Connected to Database');
    });
}

module.exports=connectDB;