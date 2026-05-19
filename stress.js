const mineflayer = require('mineflayer')

const HOST = 'nova.pikamc.vn'
const PORT = 25010
const TOTAL = 1000
const DELAY = 50 // ms giữa mỗi bot

const messages = [
  'hello',
  'hi all',
  'test',
  'ping',
  'checking lag',
  'spawn ok',
  'joined',
  'nice server'
]

function randMsg() {
  return messages[Math.floor(Math.random() * messages.length)]
}

for (let i = 0; i < TOTAL; i++) {
  setTimeout(() => {
    const bot = mineflayer.createBot({
      host: HOST,
      port: PORT,
      username: 'Bot' + i,
      version: '1.21.1'
    })

    bot.once('spawn', () => {
      setTimeout(() => {
        bot.chat(randMsg())
      }, 3000 + Math.random() * 5000)
    })

    bot.on('end', () => {
      console.log(`Bot${i} disconnected`)
    })

    bot.on('error', (err) => {
      console.log(`Bot${i}: ${err.message}`)
    })
  }, i * DELAY)
}
