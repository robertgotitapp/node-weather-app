const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3e37e0465f29b58118c48c9d06609fd1&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})