const express =require("express")
const app = express()
const ejs = require("ejs")
const router = require("./routers/search")
var bodyParser = require('body-parser')
var request = require('request');
//set  
app.set("view engine","ejs")
//use
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",router)


app.get("/",(req,res)=>{
    res.render("i")
})


app.listen(3000)