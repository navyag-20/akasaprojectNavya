const mongoose = require('mongoose');
const mongoURI='mongodb+srv://navyag201:Ng2001upta@cluster0.ofcsgpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = () => {
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    });
}

module.exports = mongoDB;
