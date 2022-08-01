const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
const passport=require('passport')
const googleStrategy=require('passport-google-oauth20')
// const userRoutes = require("./route");
passport.use(new googleStrategy({

    clientID:"930966325092-8d44fcg122ds3ivbg8s3gqfs7qg1lgo1.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"/auth/google"
    

},(accessToken,refreshToken,profile,done)=>{
console.log(accessToken)
console.log(refreshToken)
console.log(profile)
}))
app.get("/auth", passport.authenticate("google",{
    scope:["profile","email"]
}));
app.get("/auth/google",passport.authenticate("google"))



mongoose
  .connect("mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  });

const PORT=5000
app.listen(PORT, () => {
    console.log("listen at port " + PORT);
  });
  