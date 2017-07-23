import { log } from './utils/console-utils'
import Promise from 'bluebird'

async function helloWorld() {
  return Promise.delay(500).then(() => {
    log.json({
      hello: 'world',
      ...{ a: 'word' }
    })
  })
}


async function main() {
  await helloWorld()
  log.info('after hello')
}

main()


export default {}
