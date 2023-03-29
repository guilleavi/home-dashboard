import express, { Express } from 'express'
import indexRouter from './routes/index.js'
import categoryRouter from './routes/category/index.js'

const app: Express = express()
const port = 3000 // TODO: install dotenv to set the port as an env var

app.use('/', indexRouter)
app.use('/category', categoryRouter)

app.listen(port, () => {
  console.log(`[server]: Server is runnung at http://localhost:${port}`)
})
