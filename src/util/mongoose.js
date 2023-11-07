const { default: mongoose } = require("mongoose");

module.exports = {
    mutipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mutipleMongooseToObjectFilter: (mongooses, val) => {
        return (mongooses.map((mongoose) => mongoose.toObject())).filter((mongoose) => {
            if(mongoose.type == val){
                return mongoose
            }
        });
    },
    mongooseToObject: (mongoose) => {
        if (mongoose)
        {
            mongoose = mongoose.toObject() 
            return mongoose
        }else{
            return mongoose
        }

    },
}