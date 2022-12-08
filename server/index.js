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
    const sqlInsert="INSERT INTO new_table(movie_name,movie_review) VALUES ('gayfuck','so gay');"
    db.query(sqlInsert,(err,result)=>{res.send("Helloworld")})
    
})

app.listen(3001,()=>{
    console.log("Server is running")
})


