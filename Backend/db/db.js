const mongoose = require("mongoose");

const db = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Db Connected Successfully");
    }).catch((err)=>{
        console.log("Db Error", err);
    })
}
module.exports = db;
