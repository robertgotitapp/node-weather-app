const request = require('request')

const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=3e37e0465f29b58118c48c9d06609fd1&query=37.8267,-122.4233&units=f'
const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9iZXJ0bWluaG5uZ3V5ZW4iLCJhIjoiY2tqdTVmemxlMHEwcjM2bjNoOHZ2bW41bCJ9.z2kzWhYuSrAJAFh4P5xGTw&limit=1'

request({ 
  url: weatherStackUrl,
  json: true
 }, (error, response) => {
  if (error) {
    console.log('Unable to connect to WeatherStack API')
  } else if (response.body.error) {
    console.log(response.body.error.info)
  } else {
      const current = response.body.current
      const { temperature, feelslike, weather_descriptions } = current;
      console.log(`${weather_descriptions?.[0] || 'Nothing special'}. It is currently ${temperature} but it feels like ${feelslike} out there`)
    }
})

request({
  url: mapBoxUrl,
  json: true
}, (error, response) => {
  if (error) {
    console.log('Unable to connect to MapBox API')
  } else if (!response.body.features?.[0]){
    console.log('Unable to find matching location. Please try another search')
  } else {
    const { place_name, center} = response.body.features[0]
    console.log(`${place_name}, latitude: ${center[1]} longitude: ${center[0]}`)
  }
})