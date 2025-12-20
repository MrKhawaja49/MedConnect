import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './Routes/adminRoute.js'
import doctorRouter from './Routes/doctorRoute.js'
import userRouter from './Routes/userRoute.js'


// app cpnfig
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json()) //any req we made will get passed using this method
app.use(cors()) //it will  allow frontend connect to backend

//api endpoint
app.use('/api/admin', adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user', userRouter)


app.get('/', (req,res)=>{
    res.send("API IS WORKING JUST !")
})


app.listen(port, ()=> console.log("Server Started", port))