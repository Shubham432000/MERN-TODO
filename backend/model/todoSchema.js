const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    }
})

const Todo = mongoose.model("TODOS",todoSchema)

module.exports= Todo