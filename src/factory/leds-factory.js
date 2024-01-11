const random = require('../utils/random-util')

module.exports = function ledsFactory() {
  return {
    "slot": String(random(100)),
    "power": random() % 2 === 1,
    "led_2g": random() % 2 === 1,
    "led_4g": random() % 2 === 1
  }
}