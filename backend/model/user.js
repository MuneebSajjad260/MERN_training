const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String 
  },

    lettuce: { type: Number},
    bacon: { type: Number },
    cheese: { type: Number },
    meat: { type: Number },
    price:{type:Number,
      minimum: 3,}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
