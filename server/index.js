const bodyParser = require('body-parser')
const express = require('express')
const mysql=require('mysql')
const cors=require('cors')

const app=express()

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'4yYZGBBTmR5!',
    database:'crud_trial'
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))


app.post('/api/insert',(req,res)=>{
    const movie_name=req.body.movie_name
    const movie_review=req.body.movie_review

    const sqlInsert="INSERT INTO crud_1 (movie_name,movie_review) VALUES (?,?)"
    db.query(sqlInsert,[movie_name,movie_review],(err,result)=>{
        console.log(result)
    })
    
})

app.listen(3001,()=>{
    console.log("Server is running")
})




  

