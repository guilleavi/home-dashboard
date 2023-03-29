import express, { Router, Response, Request } from 'express'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Get all categories')
})

export default router
