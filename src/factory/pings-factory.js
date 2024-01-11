const random = require('../utils/random-util')

module.exports = function pingsFactory() {
  return {
    "slot": String(random()),
    "ping_1": random() % 2 === 1,
    "ping_2": random() % 2 === 1,
    "ping_3": random() % 2 === 1,
    "ping_4": random() % 2 === 1,
  }
}