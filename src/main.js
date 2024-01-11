const ledsService = require('./factory/leds-factory')
const pingsService = require('./factory/pings-factory')
const sensorsService = require('./factory/sensors-factory')
const execute = require('./service/test-persist-service')
const config = require('./config.json')

const tests = [
  {
    body: ledsService(),
    route: `${config.base_url}/tests-leds`
  },
  {
    body: pingsService(),
    route: `${config.base_url}/tests-pings`
  },
  {
    body: sensorsService(),
    route: `${config.base_url}/tests-sensors`
  }
];

execute(tests);







