
const express = require('express');
const router=express.Router();
const multer = require("multer");
const userCtrl = require("../contollers/controllers");
const storage = multer.diskStorage({
     destination: function(req,file,cb){
cb(null,'image')
    },
    filename: function (req, file, cb) {
        return cb(null, Date.now()+'_'+file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    }
})
router.post("/upload", upload.single('file'),userCtrl.userAdd)
module.exports=router;