const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plm = require("passport-local-mongoose");

const userAuth = new Schema({
    email: {
        type: String,
        required: true
    },
    // blogposts: {
    //     type: Schema.Types.ObjectId,
    //     ref: "blogposts"
    // }
})

userAuth.plugin(plm);  // username, hasing , salting automatically implemented , also authentication methods, visit its documentation on npmJS for more details
module.exports = mongoose.model("User",userAuth);

// here mongoose defines a username, key on its own
