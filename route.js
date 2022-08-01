const express = require("express");
const router = express.Router();
const userControll = require("./controller");

router.post("/signup", userControll.signUp);
router.get("/signin", userControll.signin);
module.exports = router;