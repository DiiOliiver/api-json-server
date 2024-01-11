const axios = require('axios')

module.exports = function execute(tests) {
  for (let i = 0; i < 15; i++) {
    const search = i < 5 ? 0 : i >= 5 && i < 10 ? 1 : 2
    const httpRequest = tests[search]

    axios.post(httpRequest.route, httpRequest.body)
      .then(({ data }) => {
        console.log("Sucesso:")
        console.log(data)
      })
      .catch(error => {
        console.log("Falha:")
        console.log(error.toJSON())
      })
  }
}