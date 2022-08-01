const express = require("express");
const router = express.Router();
const userControll = require("../controller/user");
const auth=require('../middleware/auth')
router.post("/signup", userControll.signup);
router.post("/signin", userControll.signin);
router.get("/getIngredients", auth,userControll.getIngredients)



module.exports = router;
