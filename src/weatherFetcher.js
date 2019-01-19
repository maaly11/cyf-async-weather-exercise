const fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

const apiKey = "255d97c403d96b4642be1ff79ecddbfc";  
const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=";

function fetchWeatherWithPromises() {
    
}

async function fetchWeatherWithAsync() {

}

exports.fetchWeatherWithPromises = fetchWeatherWithPromises;
exports.fetchWeatherWithAsync = fetchWeatherWithAsync;
