import { createLogger, format, transports } from 'winston'
import path from 'path'
import { fileURLToPath } from 'url'

const { combine, errors, json, timestamp } = format
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function buildProdLogger() {
  return createLogger({
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      json()
    ),
    level: 'info',
    transports: [
      new transports.Console({
        level: 'info'
      }),
      new transports.File({
        filename: path.join(__dirname, '../../logs/prod.log'),
        level: 'info'
      })
    ]
  })
}

export default buildProdLogger
