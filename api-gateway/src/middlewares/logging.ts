import { Express } from 'express'
import morgan from 'morgan'

export function setupLogging(app: Express) {
  app.use(morgan('dev'))
}