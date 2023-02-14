import buildDevLogger from './devLogger.js'
import buildProdLogger from './prodLogger.js'

let logger

process.env.NODE_ENV === 'dev'
  ? (logger = buildDevLogger())
  : (logger = buildProdLogger())

export default logger
