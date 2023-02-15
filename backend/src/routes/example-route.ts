import { Router } from 'express'
import exampleFunction from '../controllers/example-controller.js'

const router = Router()

/**
 * @swagger
 * /example:
 *      get:
 *          description: sends a get request to the server and get a response "hello world!".
 */
router.get('/example', exampleFunction)

export default router
