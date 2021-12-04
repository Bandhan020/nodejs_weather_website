const request = require('request')
const forecast= (latitude, longitude, callback)=>{

    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=hourly,daily&appid=b6a831fcdc26a4464d21f9f1589dfa55'
    request({url, json:true}, (error, {body})=>{
        if (error){
            callback('Unable to connect weather forecast service', undefined)
    
        }else if(body.message){
            callback(body.message, undefined)
        } 
    
        else{
            callback(undefined, {
                weather: body.current.weather[0].main,
                description: body.current.weather[0].description,
                humidity: body.current.humidity
            })
    
        }
    }) 
}

module.exports = forecast