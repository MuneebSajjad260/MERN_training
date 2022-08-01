const user = require("./model");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require ('dotenv').config()

exports.signUp=async(req,res)=>{
console.log('=====> REGISTERED')
const {email , password}=req.body
try{
if(!(email && password))
{
    res.status(400).json({message:"All inputs are required"})
}
const oldUser=await user.findOne({email})
if(oldUser)
{
    res.status(409).json({message:"User is already exist"})
}
const encryptedPassword = await bcrypt.hash(password, 10);
const signup=await user.create({
    email,
    password:encryptedPassword
})
res.status(200).send(signup);

}catch(error){
    res.status(400).send({ error: "please enter you email and password" });

}
}

exports.signin = async (req, res, next) => {
   
    console.log("sign in =========>");
    try {
      const { email, password } = req.body;
      const userlog = await user.findOne({ email });
      if (!userlog) {
        return res.json({
          status: "error",
          error: "wrong username and password",
        });
      }
      const passcomp = await bcrypt.compare(password, userlog.password);
      if(passcomp)
      {
        const token = jwt.sign(
            {
              id: userlog._id,
              email: userlog.email,
            },
    
            (process.env.JWT_SECRET),
            {
              expiresIn: 86400,
            }
          );
          console.log("logged in");
    
          res.status(200).json({ userlog, token: token });
        
      }
      else
      {
        res.status(409).json({status: "error", error: "password is incorrect" })
      }
    }catch(error){
        console.log(error);
        res.status(400).send({ error: "please enter valid email and password" });

    }
}
  