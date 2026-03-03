const Todo=require('../models/todo model')

const  getTodo=async(req,res)=>{
    const todo=await Todo.find();
    res.send(todo);
}
const  createTodo=async(req,res)=>{
   
    const {text}=req.body;
 Todo.create({text});
 res.send("create successfuly")
}
const  updateTodo=(req,res)=>{
   const {id}=req.params;
   const {text}=req.body;
   Todo.findByIdAndUpdate(id,{text})
   .then(()=>res.send("updated successfully"))
}
const  deleteTodo=(req,res)=>{
   const {id}=req.params;
   Todo.findByIdAndDelete(id)
   .then(()=>res.send("deleted  successfully"))
   .catch((err)=>{
      console.log(err)
   })
}


module.exports={getTodo,createTodo,updateTodo,deleteTodo}
    
   
