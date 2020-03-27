const express = require('express')
const routes = express.Router()



routes.get('/',(req,res)=>{
    res.send("this is hello")
})



module.exports = routes;
