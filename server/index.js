const bodyParser = require('body-parser')
const express = require('express')
const app=express()
const mysql=require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'4yYZGBBTmR5!',
    database:'crud_trial'
})



app.get('/',(req,res)=>{
    
    
})

app.listen(3001,()=>{
    console.log("Server is running")
})




  

