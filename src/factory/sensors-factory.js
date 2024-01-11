const random = require('../utils/random-util')

module.exports = function sensorsFactory() {
  let temperature = random(100)
  temperature = temperature < 25 ? 25 : temperature
  temperature = temperature > 70 ? 70 : temperature

  const tension = [127, 220][random() % 2 === 1]

  return {
    "slot": String(random()),
    "tension": tension,
    "temperature": temperature
  }
}