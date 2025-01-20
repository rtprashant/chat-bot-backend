import dotenv from 'dotenv'
import express from 'express'
import dbConnection from './db/index.js'
import questionSeeding from './db/seedQuestions.js'
import cors from 'cors'

dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials : true 
    }
))



app.use(
    express.json()
)
app.use(
    express.urlencoded({ extended: true })
)

const port = process.env.PORT || 3000

import chatBotRoutes from './routes/chatBot.routes.js'
app.use('/api/v1/chat', chatBotRoutes)
dbConnection()
await questionSeeding()
.then(()=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log('Error connecting to database', err)
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})