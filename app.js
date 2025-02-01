import express from 'express'
import cors from 'cors'

import indexRouter from './routes/index.js'

const app = express()

//use
app.use(express.json())
app.use(cors())

//routes
app.use('/', indexRouter)

export default app