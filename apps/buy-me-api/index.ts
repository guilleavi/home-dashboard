import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 3000 // TODO: install dotenv to set the port as an env var

app.get('/', (req: Request, res: Response) => {
  res.send('Express server is running')
})

app.listen(port, () => {
  console.log(`[server]: Server is runnung at http://localhost:${port}`)
})
