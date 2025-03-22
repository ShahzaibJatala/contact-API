import express from "express";
import mongoose from 'mongoose'
import bodyParser from 'express'
import userRouter from './routes/userr.js'
import contactRouter from './routes/contactr.js'
import { config } from 'dotenv'

const app = express();
app.use(express.json())

app.use(bodyParser.json())

// setup of .env
config({path:'.env'})


// User Router
// Method : POST
app.use('/api/user',userRouter);

// contact Router
// Method : POST
app.use('/api/contact',contactRouter);

mongoose.connect(process.env.MONGO_URI,{
    dbName:'contact'
}).then(() => {console.log(`MongooDB connected`)
}).catch((err) => {console.log(`Something went wrong ${err}`);
})

app.get( '/',(req,res) => {
    res.json({
        message:"Hello",
    })
})
 
app.listen(process.env.PORT,() => console.log(`Server is running`))