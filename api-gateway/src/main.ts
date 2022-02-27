import express, { Request, Response } from 'express'
import { setupLogging } from '@/middlewares/logging'
import { setupProxies } from './middlewares/proxy'
import { ROUTES } from './routes'
import { setupRateLimit } from './middlewares/rate-limit'

const app = express()
const port = process.env.PORT || 8081

setupLogging(app)
setupProxies(app, ROUTES)
setupRateLimit(app, ROUTES)

app.get('/', (req: Request, res: Response) => {
  res.send('API Gateway')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})