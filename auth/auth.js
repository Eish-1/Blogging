const User = require("../models/user.js");

exports.register = async(req,res,next)=>{
    let {username, password} = req.body;
    if( password.length < 8){
        return res.status(400).json({message: "Password less than 8 characters"});
    }
    try{
        User.create({
            username,
            password
        }).then((user)=>{
            res.status(200).json({
                message: "User successfully created",
                user
            })
        })
    }catch(err){
        res.status(400).json({
            message: "User not successfully created",
            error : `${err}`
        })
    }
}