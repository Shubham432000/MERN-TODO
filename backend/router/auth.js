const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();
require("../db/database");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")

router.get("/", (req, resp) => {
  resp.send("hello world from the router js");
});

router.post("/register", async (req, resp) => {
  const { name, email,password, cpassword } = req.body;
  // const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return resp.status(422).json({ error: "plz filled properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return resp.status(422).json({ error: "email already exist" });
    } else if (password !== cpassword) {
      return resp.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, password, cpassword });

      const userRegister = await user.save();

      if (userRegister) {
        resp.status(422).json({ error: "user register succesfully" });
      } else {
        resp.status(500).json({ error: "failed to register" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, resp) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return resp.status(400).json({ error: "plz filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if(userLogin){

    const isMatch = await bcrypt.compare(password,userLogin.password)

     token= await userLogin.generateAuthToken()
    console.log(token)

    resp.cookie("jwtoken",token,{
      expires:new Date(Date.now() + 25892000000),
      httpOnly:true
    })

    if (!isMatch) {
      resp.status(400).json({ error: "invalid Credential" });
    } else {
      resp.json({ message: "user login succesfully" });
    }
}else{
    resp.status(400).json({ error: "invalid Credential" });
}
  } catch (err) {
    console.log(err);
  }
});

router.get("/home",authenticate,(req,resp)=>{
  resp.cookie("Test","shubham")
  resp.send(req.rootUser)
})
module.exports = router;
