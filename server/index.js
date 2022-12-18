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
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get',(req,res)=>{
    const sqlGet='SELECT * from crud_1'
    db.query(sqlGet,(err,result)=>{     
        res.send(result)
    })
})


app.post('/api/insert',(req,res)=>{
    const movie_name=req.body.movie_name
    const movie_review=req.body.movie_review

    const sqlInsert="INSERT INTO crud_1 (movie_name,movie_review) VALUES (?,?)"
    db.query(sqlInsert,[movie_name,movie_review],(err,result)=>{
        console.log(err)
    })
    
})

app.delete('/api/delete/:id',(req,res)=>{
    const id=req.params.id
    const sqlDelete="DELETE FROM crud_1 where id=?"
    db.query(sqlDelete,id,(err,result)=>{
        console.log(err)
    })
})

app.put('/api/update/:id',(req,res)=>{
    const id=req.params.id
    const new_movie_review=req.body.new_movie_review
    const sqlUpdate="UPDATE crud_1 SET movie_review=? WHERE id=?"
    db.query(sqlUpdate,[new_movie_review,id],(err,result)=>{
        console.log(err)
    })
})

app.listen(3001,()=>{
    console.log("Server is running")
})




  

