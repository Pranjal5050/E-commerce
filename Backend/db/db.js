const mongoose = require("mongoose");

const db = ()=>{
    mongoose.connect("mongodb+srv://pranjal:Pranjaldev2525@cluster0.bcoxwf7.mongodb.net/we-mart?appName=we-mart").then(()=>{
        console.log("Db Connected Successfully");
    }).catch((err)=>{
        console.log("Db Error", err);
    })
}
module.exports = db;
