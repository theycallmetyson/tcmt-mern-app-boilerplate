import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Server running successfully...')
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`)
})
