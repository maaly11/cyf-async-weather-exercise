
const fetchWeatherPromises = require('../src/weatherFetcherAnswer').fetchWeatherWithPromises;
const fetchWeatherAsync = require('../src/weatherFetcherAnswer').fetchWeatherWithPromises;

describe('weather api', function() {
    
    it('fetches the weather with promises', function() {
        return new Promise(function (resolve, reject) {
            fetchWeatherPromises()
            .then(function (response) {
                expect(response.status).toBe(200);

                response.json()
                .then(function (body) {
                    expect(body).toBeDefined();
                    console.log(body);
                    resolve();
                });
            });
        });
    });

    it('fetches the weather with ES6 asnyc/await', async function() {
        const response = await fetchWeatherAsync();
        expect(response.status).toBe(200);

        const json = await response.json();
        expect(json).toBeDefined();

        console.log(json);
    });

});
