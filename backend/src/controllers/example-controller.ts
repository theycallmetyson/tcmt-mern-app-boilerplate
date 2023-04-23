import { Request, Response } from 'express'
import { sayHello } from '../services/example-service.js'

export const exampleFunction = (req: Request, res: Response): void => {
  sayHello(req, res)
}
