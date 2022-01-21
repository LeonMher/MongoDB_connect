const express = require('express')
const app = express();


app.get('/', (req,res)=>{

    res.send('worked')
})


app.listen(4999)