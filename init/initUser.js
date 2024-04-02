const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("../models/user.js");
const blogposts = require("../models/blogtype.js");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Blogger-p");
    }catch(err){
        console.log("Couldn't connect to database. Error: ",err);
    }
}

main().
 then(()=>{
    console.log("+ connected +");
 })
 .catch((err)=>{
    console.log(`Caught an error: ${err}`);
 })

async function output(){
    let out2 = await blogposts.find();
    console.log(out2);
}
output();
