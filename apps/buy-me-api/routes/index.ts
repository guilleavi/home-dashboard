import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send("Welcome to the 'BUY ME ' API")
})

export default router
