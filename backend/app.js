const express = require("express");


const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());


const userRoutes = require("./routes/routes");
app.use('/image', express.static('image'));
app.use("/api", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/imagedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  });

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
const port = 5002;
app.listen(port, () => {
  console.log("listen at port " + port);
});
