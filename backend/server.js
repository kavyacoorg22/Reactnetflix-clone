const express =require('express');
const app=express()
const connectDb=require('./db/connectDB')
require('dotenv').config()
const User=require('./model/useModel')
const cors = require("cors");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")


app.use(cors());
app.use(express.json())


//signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message:"User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup" });
  }
});
//signIn logic

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "User not found" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
})


//server
const startServer=async()=>{
  try{
   await connectDb()
   console.log("Database connected successfully")

   app.listen(process.env.PORT,()=>{
  console.log("Server running")
   })
  }catch(err)
  {
    console.log(err)
  }
}

startServer()