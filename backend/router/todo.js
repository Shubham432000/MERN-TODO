const express = require("express");
const router = express.Router();
require("../db/database");
const Todo = require("../model/todoSchema");

router.post("/value", async (req, resp) => {
  const { data } = req.body;
  try {
    if (!data) {
      return resp.status(422).json({ error: "please filled the value" });
    }

    const Data = await Todo.create({ data });

    resp.status(201).json({
      success: true,
      message: "data created succesfully",
      Data,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/gettodo",async(req,resp)=>{
    try{
        const getTodo= await Todo.find();
        resp.status(201).json({
            success:true,
            getTodo
        })
    }catch(err){
        console.log(err)
        resp.status(401).json({
            success:false,
            message:err.message
        })
    }
})

router.put("/edittodo/:id",async(req,resp)=>{
    try{
        const user = await Todo.findByIdAndUpdate(req.params.id,req.body);
        resp.status(200).json({
            success:true,
            message:"user update succefully"
        })
    }catch(err){
console.log(err)
resp.status(401).json({
    success:false,
    message:err.message
})
    }
})

router.delete("/delettodo/:id",async(req,resp)=>{
    try{
        const todoId = req.params.id;
        const user = await Todo.findByIdAndDelete(todoId)
        resp.status(200).json({
            success:true,
            message:"user delet succefully"
        })
    }catch(err){
        console.log(err)
        resp.status(401).json({
            success:false,
            message:err.message
        })
    }
})
module.exports = router