const express =require('express');
const app=express()
const connectDb=require('./db/connectDB')
require('dotenv').config()


app.get('/',(req,res)=>{
  res.send("server running...........")
})


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