const express=require('express')
const app=express();
require('dotenv').config()
const connectWithDb=require('./config/db')

app.use(express.json())

connectWithDb()

app.listen(4000,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

const user=require('./routes/user')
const area=require('./routes/area')

app.use("/api/user",user)
app.use("/api/area",area)