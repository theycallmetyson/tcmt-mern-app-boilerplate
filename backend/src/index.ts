import express, { Application } from 'express'
import dotenv from 'dotenv'
import compression from 'compression'
import os from 'os'
import cluster from 'cluster'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { exampleRouter } from './routes/example-route.js'

import { logger } from './config/winston/winston-setup.js'

const app: Application = express()
const PORT = process.env.PORT || 3000
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const useSingleCore = () => {
  app.use(helmet())
  app.use(compression())
  app.use(express.json())

  app.use('/api', exampleRouter)

  app.listen(PORT, () => {
    logger.info(`Server is running on PORT ${PORT}...`)
  })
}

const useMultiCore = () => {
  const numCPUs = os.cpus().length

  if (cluster.isPrimary) {
    logger.info(`Started Primary cluster with ${numCPUs} workers`)

    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
      logger.warn(
        `Worker ${worker.id} died with code: ${code} and signal: ${signal}`
      )
      logger.info('Starting a new worker')
      cluster.fork()
    })
  } else {
    useSingleCore()
  }
}

if (process.env.NODE_ENV === 'prod') {
  useMultiCore()
} else {
  useSingleCore()
}
