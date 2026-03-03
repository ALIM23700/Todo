const mongoose=require("mongoose");

const todoScima=new mongoose.Schema({
    text:{
        type:String,
        require:true
        
    }

})
module.exports=mongoose.model("todo",todoScima);