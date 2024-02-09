const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const blogpost = require("./models/blogtype.js") // blogpost - collection
const ejsMate = require("ejs-mate");

const timee = new Date();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);

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

let arr = ["raj","Satish","girish"]; // JUST At random 



app.get("/",(req,res)=>{
    res.send("The site functions!");
})

app.get("/home",async(req,res)=>{
    const allBlogs = await blogpost.find({});
    res.render("pages/home.ejs",{allBlogs});
})

app.get("/home/:id",async(req,res)=>{
    let {id} = req.params;
    const blog = await blogpost.findById(id);
    res.render("pages/show.ejs",{blog});
})

app.get("/init",async(req,res)=>{
    let now = timee.toLocaleString(); // current time in string format
    console.log(now);
    const newBlog = new blogpost({
        username: "Akash",
        picture: "",
        title: "Mr. Dostoevsky",
        blogmat: "Fyodor Dostoevsky Quotes. Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        dateTime: now,
    });
    await newBlog.save();
    console.log("sample was saved!");
    res.send("database initialized");
})



// ---------------------+----------------------
app.listen("3000",()=>{
    console.log("+ server started + ");
})

app.get("/EishChandeal",(req,res)=>{
    res.send("Welcome Creator");
})