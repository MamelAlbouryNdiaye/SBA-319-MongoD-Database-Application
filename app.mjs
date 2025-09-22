import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connection.mjs'

// setup 
dotenv.config()
const app = express()
const port = process.env.PORT || 3225


//db connection
connectDB();




app.listen(port, ()=>{
    console.log(`listening on port  ${port}`)
})

