import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connection.mjs'
import globalErr from './middlewares/globalErr.mjs'
import log from './middlewares/loginMiddleware.mjs'
import couresRoutes from './routes/courseRoutes.mjs'
import userRoutes from "./routes/userRoutes.mjs";



// setup 
dotenv.config()
const app = express()
const port = process.env.PORT || 3225


//db connection
connectDB();

// regsiter view engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(log)
app.use(express.static('public'));

//routes
app.use('/', couresRoutes)
app.use('/api/users', userRoutes);

// Err Handling middleware
app.use(globalErr)


app.listen(port, ()=>{
    console.log(`listening on port  ${port}`)
})

