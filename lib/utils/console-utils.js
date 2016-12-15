import chalk from 'chalk'
import { inspect } from './utils'

var preProcessMessage = function (message) {
  if (message === undefined) {
    return 'undefined'
  }

  if (message === null) {
    return 'null'
  }

  if (typeof message !== 'string') {
    message = message.toString()
  }

  return message
}

const info = function (message) {
  message = preProcessMessage(message)
  console.log(chalk.white(message))
}

const error = function (message) {
  message = preProcessMessage(message)
  console.log(chalk.red('× ' + message))
}

const debug = function (message) {
  message = preProcessMessage(message)
  console.log(chalk.blue(message))
}

const done = function (message) {
  message = preProcessMessage(message)
  console.log(chalk.green('\t✓ ' + message))
}


const warn = function (message) {
  message = preProcessMessage(message)
  console.log(chalk.yellow('\t○ ' + message))
}

const json = function (object) {
  console.log(inspect(object))
}

const log = {
  info,
  error,
  debug,
  done,
  warn,
  json
}

export {
  log
}
