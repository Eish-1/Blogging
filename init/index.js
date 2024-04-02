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

let data = [
    {
      username: "John Doe",
      picture: "https://example.com/picture1.jpg",
      title: "First Blog Post",
      blogmat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dateTime: "2024-02-19T12:00:00",
      password: "abc12345"
    },
    {
      username: "Jane Smith",
      picture: "https://example.com/picture2.jpg",
      title: "My Thoughts",
      blogmat: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "2024-02-18T14:30:00",
      password: "def67890"
    },
    // Add more objects here following the same format
    {
      username: "Alice Johnson",
      picture: "https://example.com/picture3.jpg",
      title: "Travel Adventures",
      blogmat: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2024-02-17T10:15:00",
      password: "ghi13579"
    }
  ];
  

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

// gpt gave data: 

let data3 = [
    {
      username: "John Doe",
      picture: "https://example.com/picture1.jpg",
      title: "First Blog Post",
      blogmat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dateTime: "2024-02-19T12:00:00",
      password: "abc12345"
    },
    {
      username: "Jane Smith",
      picture: "https://example.com/picture2.jpg",
      title: "My Thoughts",
      blogmat: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "2024-02-18T14:30:00",
      password: "def67890"
    },
    {
      username: "Alice Johnson",
      picture: "https://example.com/picture3.jpg",
      title: "Travel Adventures",
      blogmat: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2024-02-17T10:15:00",
      password: "ghi13579"
    },
    // Add more objects here following the same format
    {
      username: "Michael Brown",
      picture: "https://example.com/picture4.jpg",
      title: "Tech Trends",
      blogmat: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      dateTime: "2024-02-16T08:45:00",
      password: "jkl24680"
    },
    {
      username: "Emily Wilson",
      picture: "https://example.com/picture5.jpg",
      title: "Cooking Tips",
      blogmat: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateTime: "2024-02-15T16:20:00",
      password: "mno35791"
    },
    {
      username: "David Taylor",
      picture: "https://example.com/picture6.jpg",
      title: "Fitness Journey",
      blogmat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "2024-02-14T09:30:00",
      password: "pqr46802"
    },
    {
      username: "Emma Martinez",
      picture: "https://example.com/picture7.jpg",
      title: "Book Review",
      blogmat: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2024-02-13T11:45:00",
      password: "stu57913"
    },
    {
      username: "Daniel Anderson",
      picture: "https://example.com/picture8.jpg",
      title: "Career Advice",
      blogmat: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      dateTime: "2024-02-12T15:10:00",
      password: "vwx68024"
    },
    {
      username: "Olivia Garcia",
      picture: "https://example.com/picture9.jpg",
      title: "Art Inspiration",
      blogmat: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateTime: "2024-02-11T13:25:00",
      password: "yz012345"
    },
    {
      username: "James Clark",
      picture: "https://example.com/picture10.jpg",
      title: "Music Reviews",
      blogmat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "2024-02-10T07:50:00",
      password: "abc12345"
    },
    {
      username: "Sophia Hernandez",
      picture: "https://example.com/picture11.jpg",
      title: "Fashion Trends",
      blogmat: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2024-02-09T12:15:00",
      password: "def67890"
    },
    {
      username: "William Martinez",
      picture: "https://example.com/picture12.jpg",
      title: "Travel Diaries",
      blogmat: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      dateTime: "2024-02-08T10:30:00",
      password: "ghi13579"
    },
    {
      username: "Isabella Lewis",
      picture: "https://example.com/picture13.jpg",
      title: "Healthy Living",
      blogmat: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateTime: "2024-02-07T14:20:00",
      password: "jkl24680"
    },
    {
      username: "Benjamin Thompson",
      picture: "https://example.com/picture14.jpg",
      title: "Photography Tips",
      blogmat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "2024-02-06T08:40:00",
      password: "mno35791"
    },
    {
      username: "Ava Lee",
      picture: "https://example.com/picture15.jpg",
      title: "Artistic Creations",
      blogmat: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dateTime: "2024-02-05T11:55:00",
      password: "pqr46802"
    },
    {
      username: "Ethan White",
      picture: "https://example.com/picture16.jpg",
      title: "Home Decor Ideas",
      blogmat: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      dateTime: "2024-02-04T09:35:00",
      password: "stu57913"
    },
    {
      username: "Mia Brown",
      picture: "https://example.com/picture17.jpg",
      title: "Gardening Tips",
      blogmat: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateTime: "2024-02-03T13:40:00",
      password: "vwx68024"
    },
]