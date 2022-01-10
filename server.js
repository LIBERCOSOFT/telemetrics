import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8008
const app = express()

import InitiateMongoServer from './config/db.js'
// import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

app.use(helmet())
app.use(cors())

app.use(express.json())

InitiateMongoServer()

app.get('/', (req, res) => {
  res.status(200).send('Server Started!!')
})

// app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port : ${port}`
  )
})
