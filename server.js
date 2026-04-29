const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("<h1>Updated from CI/CD</h1>");
});

app.post("/add", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send("User added");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});