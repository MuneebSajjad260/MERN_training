const express=require('express');
require ('dotenv').config()
const jwt =require('jsonwebtoken')

module.exports=function (req, res, next){
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    const token=req.header('authorization')
    if (!token) 
    {
        return res.status(401).json({message:"No token"})
}
  try{
    console.log("token:",token)
 
   const decoded= jwt.verify(token,process.env.JWT_SECRET)
   
     req.userId=decoded.id
    
      next()
    }catch{
        return res.status(401).json("Token is not valid")
    }

  }