const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
var cookieParser = require('cookie-parser')
const app = express()



dotenv.config({path:'./config.env'})
require("./db/database")
app.use(express.json())

const PORT =process.env.PORT

app.use(require("./router/auth"))
app.use(require("./router/todo"))
app.use(cookieParser())
// app.get("/",(req,resp)=>{
//     resp.send("hello world wide web")
//     console.log("first")
// })
app.get("/signup",(req,resp)=>{
    resp.send("hello from signup")
    console.log("hello from signup")
})
app.get("/login",(req,resp)=>{
    resp.send("hello from login")
    console.log("hello from login")
})

app.get("/home",(req,resp)=>{
    resp.cookie("Test","shubham")
    resp.send("hello from home")
})

app.listen(PORT)

// mongodb+srv://shubham:<password>@cluster0.asnncky.mongodb.net/?retryWrites=true&w=majority