import express, { Express } from 'express'
import dotenv from 'dotenv'
import indexRouter from './routes/index.js'
import categoryRouter from './routes/category/index.js'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use('/', indexRouter)
app.use('/category', categoryRouter)

app.listen(port, () => {
  console.log(`[server]: Server is runnung at http://localhost:${port}`)
})
