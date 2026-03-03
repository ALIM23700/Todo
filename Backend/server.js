
const express=require("express")
const app=express();
const cors=require('cors')
const mongoose=require('mongoose');
const router = require("./Routes/route");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

require("dotenv").config();
const PORT=process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('mongodb is connected')
})
.catch((err)=>{
    console.err(err.message);
})

app.use("/api/todo/",router)


app.use("/",(req,res)=>{
    res.send("404 page not found")
})
app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`)
})