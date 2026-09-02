const mongoose = require("mongoose");

const db = ()=>{
    mongoose.connect("mongodb://localhost:27017/We-Mart").then(()=>{
        console.log("Db Connected Successfully");
    }).catch((err)=>{
        console.log("Db Error", err);
    })
}
module.exports = db;