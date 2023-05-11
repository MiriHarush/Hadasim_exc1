const express = require('express');
const router = express.Router();
const bl= require('../model/BL')

router.get("/",async function(req,res){
    let data = await bl.getMembers()          
return res.status(200).json(data)
})

router.get("/:ID",async function(req,res){
    let ID=req.params.ID
    console.log(ID);
    let data = await bl.getMember(ID)      
return res.status(200).json(data)
})

router.post("/",async function(req,res){
    let data = await bl.addMember(req,body)            
    console.log(data+" ------------------------------------");
return res.status(200).json(data)
})
module.exports = router;