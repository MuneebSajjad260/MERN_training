const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const app = express();
app.use(express.json());
const db = new JsonDB(new Config("myDatabase", true, false, "/"));
app.get("/", (req, res) => {
  res.json({ message: "welcome to 2 factor authentication" });
});

app.post("/register", (req, res) => {
  const id = uuid.v4();
  try {
    const path = `/user/${id}`;

    const tempkey = speakeasy.generateSecret();
    db.push(path, { id, tempkey });
    res.status(200).json({ id, secret: tempkey.base32 });
  } catch (e) {
    res.status(500).json({ message: "error" });
  }
});

app.post("/verify", (req, res) => {
  const { userId, token } = req.body;
  try {
    // Retrieve user from database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    console.log({ user });
    const { base32: secret } = user.tempkey;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
    });
    if (verified) {
      // Update user data
      db.push(path, { id: userId, secret: user.tempkey });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});

app.post("/validate", (req, res) => {
  const { userId, token } = req.body;
  try {
    // Retrieve user from database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    console.log({ user });
    const { base32: secret } = user.secret;
    // Returns true if the token matches
    const tokenValidates = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      window: 1,
    });
    if (tokenValidates) {
      res.json({ validated: true });
    } else {
      res.json({ validated: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
