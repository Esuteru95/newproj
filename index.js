import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("<h1>HELLO</h1>");
})

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Sorver is running via port ${port}`)
})