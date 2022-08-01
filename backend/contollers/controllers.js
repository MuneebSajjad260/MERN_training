const Images = require("../models/models");
exports. userAdd=async(req,res)=>{
console.log(req.file)
    let profile =(req.file)?req.file.filename :null
    let data =new Images({profile})
    let response=await data.save()
    res.status(200).json({message:"user added successfully", })
    // profile_url: `http://localhost:5002/image/${req.file.filename}`
}