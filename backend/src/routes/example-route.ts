import { Router } from 'express'
import { exampleFunction } from '../controllers/example-controller.js'

export const exampleRouter = Router()

exampleRouter.get('/example', exampleFunction)
