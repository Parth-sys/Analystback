import express from 'express';
import dotenv from'dotenv'
import connection from './connection.js';
import cors from 'cors'



const app=express();
dotenv.config();
const PORT=process.env.PORT
app.use(cors())

app.get('/data',async(req,res)=>{

    const client=await connection();
    const user=await client.db("analysttai").collection("usersdata").find().toArray();
    res.send(user)
})


app.listen(PORT,()=>{
    console.log('server is running')
})