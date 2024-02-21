const mongoose = require("mongoose");
const blogposts = require("../models/blogtype.js");
const express = require("express");
const app = express();

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Blogger-p");
    }catch(err){
        console.log("An error occured: ",err);
    }
}

// DATA TO INPUT: 
let newBlogs = [
    {
        username: "BagMan",
        picture: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
        title: "> BCS <",
        blogmat: "The choices we make put us on a road, good choice road or bad choice road. bad one is difficult to get off , you try to but before you know it you are back on it..",
        dateTime: "21/02/24 17:29",
        password: "bagthebadguy"
        },
    {
        username: "Akash",
        picture: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
        title: "Mr. Dostoevsky",
        blogmat: "Fyodor Dostoevsky Quotes. Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        dateTime: "21/02/24 17:29",
        password: "Iamakash"
    },
]

// INPUTING FUNCTIONALITY: 
main()
 .then(()=>{
    console.log("+ Connected to DB +");
 }).catch((err)=>{
    console.log("Oops an error occured: \t",err);
 })

app.listen("8080",()=>{
    console.log("- Server Started -");
})

app.get("/",(req,res)=>{
    res.send("Server running!");
})

app.get("/init",async(req,res)=>{
    await blogposts.deleteMany({});
    await blogposts.insertMany(newBlogs);
    res.send("DB got initialized!");
})