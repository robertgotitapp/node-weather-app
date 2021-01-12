const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3e37e0465f29b58118c48c9d06609fd1&query=37.8267,-122.4233&units=f'

request({ 
  url: url,
  json: true
 }, (error, response) => {
  const current = response.body.current
  const { temperature, feelslike, weather_descriptions } = current;
  console.log(`${weather_descriptions?.[0] || 'Nothing special'}. It is currently ${temperature} but it feels like ${feelslike} out there`)
})