const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const blogposts = require("./models/blogtype.js") // blogposts - collection
const users = require("./models/user.js") // users - collection
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const timee = new Date();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Blogger-p");
}

main()
 .then(()=>{
    console.log("Connected to DB!");
 })
 .catch((err)=>{
    console.log("error occured: ",err)
 })

 app.listen("8080",()=>{
    console.log("works! WORKS!");
 })

 app.get("/",(req,res)=>{
    res.send("So hellow ");
 })

 app.get("/addBlog",(req,res)=>{
    let current =  timee()
    const newBlog = new blogposts({
        username: "Akash",
        picture: "",
        title: "Cross",
        blogmat: "Cross Quotes. Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        dateTime: current,
    })
 })