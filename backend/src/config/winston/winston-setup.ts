import { Logger } from 'winston'
import { buildDevLogger } from './dev-logger.js'
import { buildProdLogger } from './prod-logger.js'

export const logger: Logger =
  process.env.NODE_ENV === 'dev' ? buildDevLogger() : buildProdLogger()
