const fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

const apiKey = "255d97c403d96b4642be1ff79ecddbfc";  
const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=";

function fetchWeatherWithPromises() {
    return new Promise(function (resolve, reject) {
        fetch(baseEndpoint + apiKey)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
        });
    });
}

async function fetchWeatherWithAsync() {
    try {
        return await fetch(baseEndpoint + apiKey);
    } catch (error) {
        return error;
    }
}

exports.fetchWeatherWithPromises = fetchWeatherWithPromises;
exports.fetchWeatherWithAsync = fetchWeatherWithAsync;
