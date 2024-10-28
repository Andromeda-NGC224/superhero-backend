import express from 'express'
import pino from 'pino-http'
import cors from 'cors'
import { env } from '../src/utils/env.js'
import { PUBLIC_DIR } from './constants/constants.js'
import superheroesRouter from './routers/superheroesRouter.js'
import errorHandler from '../src/middlewares/errorHandler.js'
import notFoundMiddleware from '../src/middlewares/notFoundHandler.js'

const PORT = Number(env('PORT', '3000'))

const setupServer = () => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.static(PUBLIC_DIR))

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  )
  app.use('/superheroes', superheroesRouter)

  app.get('/', (req, res) => {
    res.json({ message: 'Living' })
  })

  app.use('*', notFoundMiddleware)
  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

export default setupServer
