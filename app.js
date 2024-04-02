const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const blogposts = require("./models/blogtype.js") // blogposts - collection
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const flash = require("connect-flash");

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js"); // users - collection

const timee = new Date();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("cookie-parser")()); // just installed for passport 
app.use(express.json());
app.use("/api/auth", require("./auth/route.js")); // using as an api for registration

// --------
// app.use(session(sessionOptions));
let session =  require("express-session");
var sess = { secret: 'keyboard cat', resave: true, saveUninitialized: true };
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());               // i dont have bootstrap properly setup
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// --------

app.use(function(req,res,next){
    res.locals.message = req.flash();
    next();     // doesn't work as of now, required bootstrap and some styling using it
})

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

app.get("/",(req,res)=>{
    res.send("The site functions!");
})

// demo-user testing passportJs
// app.get("/demoUser",async(req,res)=>{
//     let fakeUser = new User({
//         username: "Emelio",
//         email: "emelia123@gmail.com"
//     })
//     // another static method in local-passport, saves in db the new instance with its password. also checks whether the username is unique or not
//     let registeredUser =  await User.register(fakeUser,"faker123"); 
//     res.send(registeredUser);
// })


// For Sign-In
app.get("/signin",async(req,res)=>{
    res.render("pages/signin.ejs");
})

app.post("/home/logged",
    passport.authenticate("local", {
        failureRedirect: "/signin",
        failureFlash: true
    }),
    async(req,res)=>{
        // res.send("Welcome back!")
        req.flash("success", "welcome Back to blogposts!"); // bootstrap is not setup as of now
        console.log(" \n >> Welcome back!");
        res.redirect("/home");
    }   
)

// For Sign-Up --> 
app.get("/signup",(req,res)=>{
    res.render("pages/signup.ejs");
})
app.post("/home/signed",async(req,res)=>{
    try{
        let {username, password, email} = req.body.User;
        const newUser = new User({
            username,
            email
        })
        let regUser = await User.register(newUser,password); // can include a callback function too
        console.log(regUser);
        
        res.redirect("/home");
    }catch(err){
        console.log("An error occured: ", err.message); // passport local strategy lets you know
        res.redirect("/signup")
    }
})
// <-- SignUp functionality above

app.get("/home/new",(req,res)=>{
    if(!req.isAuthenticated()){
        console.log("\n error! you must be logged to create a new post.");
        res.redirect("/signin");
    }else{
        let now = timee.toLocaleString();
        res.render("pages/new.ejs",{now});
    }
    
})

// Post request for new blog
app.post("/home",async(req,res)=>{
    const newBlog = new blogposts(req.body.blogpost);
    try{
        await newBlog.save();
        console.log(newBlog);
        res.redirect("/home");
    }catch(error){
        console.log("An error occured: ",error);
        res.send("Lmao okay try again please");
    }
})

app.get("/home",async(req,res)=>{
    const allBlogs = await blogposts.find({});
    res.render("pages/home.ejs",{allBlogs});
})

app.get("/home/:id",async(req,res)=>{
    let {id} = req.params;
    const blogpost = await blogposts.findById(id);
    res.render("pages/show.ejs",{blogpost});
})

// for deletion


app.get("/init",async(req,res)=>{
    let now = timee.toLocaleString(); // current time in string format
    console.log(now);
    const newBlog = new blogposts({
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
