const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const users = require("./user.js");

const blogtype = new Schema({
    username: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
        set : (v) => (v === "") ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
        : v,
    },
    title: {
        type: String,
        required: true
    },
    blogmat: {
        type: String
    },
    dateTime: String,
    
})

const blogpost = mongoose.model("blogpost",blogtype);
module.exports = blogpost;