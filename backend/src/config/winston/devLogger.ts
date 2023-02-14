import { createLogger, format, transports } from 'winston'
import path from 'path'
import { fileURLToPath } from 'url'

const { colorize, combine, errors, printf, timestamp } = format
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildDevLogger() {
  const logFormat = printf(
    ({ level, message, stack, timestamp }) =>
      `${timestamp} [${level}]: ${stack || message}`
  )

  return createLogger({
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    level: 'debug',
    transports: [
      new transports.Console({
        format: combine(
          colorize({
            all: true
          })
        ),
        level: 'debug'
      }),
      new transports.File({
        filename: path.join(__dirname, '../../logs/dev.log'),
        level: 'warn'
      })
    ]
  })
}

export default buildDevLogger
