const express = require('express');


const app = express();

app.get('/home',(req,res)=>{
    console.log(req);
    res.send(JSON.stringify([1,2,3]));
})

app.get('/about/deepak',(req,res)=>{
    res.send(JSON.stringify([4,5,6]));
})

app.listen('9000', (req, res) => {
    console.log(req);
})

