const express = require("express");

require('module-alias/register')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");

dotenv.config();
const userRoutes = require("./route/user");

app.use("/api/user", userRoutes);
// app.post("/api/register",(req,res)=>{
//   console.log(req.body)
//   res.json({status:'ok'})
// })
mongoose
  .connect("mongodb://localhost:27017/burgerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  });

// app.get("/",(req,res)=>{

// res.send('helloworld')
// })
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
const port = 5000;
app.listen(port, () => {
  console.log("listen at port " + port);
});
