const express = require('express')
const mongoose = require('mongoose')
const app=express()

 const routes= require('./routes/routes')
 app.use('/api',require('./routes/routes'))

  //conect to mongoDB
 const MongoClient=require('mongodb').MongoClient
 require('dotenv').config()
 const connectionString=process.env.DB_STRING
 MongoClient.connect(connectionString)
 .then(client=>{
     console.log('connected to database')
     const db=client.db('HMOdb')
     const coronaCollection=db.collection('corona')
 })
 .catch(error=> console.error(error))

 app.use(function(err,req,res,next){
     //console.log(err);
     res.status(422).send({error: err.message});
 });


app.use(express.json())
////server 3000
 app.listen(3000,()=>{
     console.log(`Server Started at ${3000}`)
 })