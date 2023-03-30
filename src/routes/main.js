const express=require("express")


const routes=express.Router()

routes.get("/",(req,res)=>{
    res.render("Index")
})

routes.get("/gallery",(req,res)=>{
    res.render("gallery")
})


module.exports=routes