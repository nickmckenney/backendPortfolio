
const express = require('express');

const importData=require("./data.json");


const app = express();

app.get("/",(req,res)=>{
    res.send("hi");
});
app.get("/players",(req,res)=>{
    res.send(importData);
});
app.listen(4000, '0.0.0.0');

