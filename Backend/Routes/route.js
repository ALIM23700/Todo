const { getTodo, createTodo, updateTodo, deleteTodo } = require("../controlers/controle");

const router=require("express").Router();
router.get("/",getTodo)
router.post("/create",createTodo)
router.put("/:id",updateTodo)
router.delete("/delete/:id",deleteTodo)
                                             

module.exports=router