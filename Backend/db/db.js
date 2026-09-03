const mongoose = require("mongoose");

const db = ()=>{
    mongoose.connect("mongodb+srv://Pranjal2525:Pranjaldev@2525@cluster0.bcoxwf7.mongodb.net/?appName=we-mart").then(()=>{
        console.log("Db Connected Successfully");
    }).catch((err)=>{
        console.log("Db Error", err);
    })
}
module.exports = db;
