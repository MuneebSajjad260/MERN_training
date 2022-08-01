const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
router.post("/addReviews", reviewController.addReviews);
module.exports = router;
