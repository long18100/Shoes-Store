const mongoose = require('mongoose')

let connect = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/OOAD_PJ',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfuly')
    } catch(e) {
        console.log('Connect failure');
    }
}

module.exports = { connect }