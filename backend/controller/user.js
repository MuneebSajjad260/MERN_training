require('module-alias/register')
const User = require("../model/user");
const order = require("../model/order");
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require ('dotenv').config()


exports.signup = async (req, res) => {
  console.log("registered=====>");
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json("All inputs are required");
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).json("user already exist, please login");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const signup = await User.create({
      email,
      password: encryptedPassword,
      lettuce:0,
      bacon:0,
      cheese:0,
      meat:0,
      price:3
    });
    res.status(200).json(signup);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "please enter you email and password" });
  }
};

exports.signin = async (req, res, next) => {
  
  console.log("sign in =========>");
  try {
    const { email, password } = req.body;
    const userlog = await User.findOne({ email });
    if (!userlog) {
      return res.json({
        status: "error",
        error: "wrong username and password",
      });
    }

    const passcomp = await bcrypt.compare(password, userlog.password);

    if (passcomp) {
      
      const token = jwt.sign(
        {
          id: userlog._id,
        },

        (process.env.JWT_SECRET),
        {
          expiresIn: 86400,
        }
      );
      console.log("logged in",userlog._id);

      return res.json({ userlog, token: token });
    } else {
      return res.json({ status: "error", error: "password is incorrect" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports .getIngredients = async(req, res) =>{

  console.log("==============> VIEW LIST");
  console.log("userid is: " ,req.userId);

  try{
   
    const userlog = await User.findById({ _id: req.userId});
    // if (userlog) {
      // const m = await User.findById({_id: req.userId});
      console.log(userlog);
      return res.status(200).json(userlog);
     
    // }
  }catch {
    return res.json({ status: "error", error: "wrong ID" });
  }


};
