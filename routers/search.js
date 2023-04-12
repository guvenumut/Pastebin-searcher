const express = require('express')
const router = express.Router()
const {getData,searchData}=require("../controllers/dataSearch")



router.get("/search",(req,res)=>{
    res.json({msj:"search"})
})

router.post("/search",getData)
router.get("/search/:keyword",searchData)

module.exports = router;
