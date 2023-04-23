import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import { exampleRouter } from '../../routes/example-route.js'
import { Application } from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'REST API for Swagger Documentation',
      version: '1.0.0'
    },
    schemes: ['http', 'https'],
    servers: [{ url: 'http://localhost:3000/' }]
  },
  apis: [
    `${__dirname}/routes/example-route.ts`,
    './dist/routes/example-route.js'
  ]
}

const swaggerSpec = swaggerJSDoc(options)

export const swagger = (app: Application) => {
  app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.use(bodyParser.json())

  app.use(exampleRouter)
}
