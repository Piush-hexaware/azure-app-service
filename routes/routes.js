const express = require('express')
const routes = express.Router()



routes.get('/first',(req,res)=>{
    res.send("this is hello")
})



module.exports = routes;