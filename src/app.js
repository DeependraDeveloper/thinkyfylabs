const express=require('express')
const app=express()
const route=require('./routes/route')
app.use(express.json())
app.use('/',route)
app.listen(3030,()=>console.log('server running on prot 3030'))