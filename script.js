const options = {
    method: 'GET',
    headers: {
        // Add api data
    }
};

const getWeatherByLocation = () => {
    if (navigator.geolocation) {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`, options)
                    .then(response => response.json())
                    .then(response => {
                        const city = response.city;
                        // Update weather based on user's location
                        getWeather(city);
                    })
                    .catch(err => console.error(err));
            },
            (error) => {
                console.error(error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Call getWeatherByLocation to prompt user for location and update weather
getWeatherByLocation();

const getWeather = (city) => {
    // Show loading spinner
    document.getElementById('loadingSpinner').classList.remove('d-none');

     // Show loading spinner only if screen width is greater than 768px
     if (window.innerWidth > 768) {
        loadingSpinner.classList.remove('d-none');
    }

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            cityName.innerHTML = city;
            console.log(response);
            
            // Update current weather information
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;

            // Fetch and update forecast information
            getForecast(city);
        })
        .catch(err => console.error(err))
        .finally(() => {
            // Hide loading spinner after data is loaded (or in case of an error)
            document.getElementById('loadingSpinner').classList.add('d-none');
        });
}

window.addEventListener('resize', () => {
    // Call getWeather when the window is resized
    getWeather(city.value);
});

const getForecast = (city) => {
    // Fetch forecast data
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/forecast?city=' + city, options)
        .then(response => response.json())
        .then(forecastResponse => {
            // Update forecast information
            updateForecast(forecastResponse);
        })
        .catch(err => console.error(err));
}

const updateForecast = (forecastResponse) => {
    const forecastList = document.getElementById('forecastList');
    forecastList.innerHTML = '';

    if (forecastResponse && forecastResponse.forecast) {
        // Check if forecastResponse and forecast property exist
        forecastResponse.forecast.forEach(day => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `Day: ${day.date}, Temperature: ${day.temperature}&#8451;, Weather: ${day.weather}`;
            forecastList.appendChild(listItem);
        });
    } else {
        forecastList.innerHTML = 'No forecast data available, try another location.';
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

TweenMax.from(".nav-anim" , 0.8 , {
    delay : 0,
    opacity : 0,
    y : -20,
    ease: Expo.easeInOut
})


TweenMax.from(".header-anim" , 0.9 , {
    delay : 0,
    opacity : 0,
    y : -20,
    ease: Expo.easeInOut
})


TweenMax.from(".card-1" , 0.9 , {
    delay : 0.3,
    opacity : 0,
    y : 20,
    ease: Expo.easeInOut
})


TweenMax.from(".card-2" , 0.9 , {
    delay : 0.5,
    opacity : 0,
    y : 40,
    ease: Expo.easeInOut
})


TweenMax.from(".card-3" , 0.9 , {
    delay : 0.7,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})

TweenMax.from(".card-4" , 0.9 , {
    delay : 0.9,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})

TweenMax.from(".card-5" , 0.9 , {
    delay : 0.11,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})

TweenMax.from(".name-anim" , 0.9 , {
    delay : 0.7,
    opacity : 0,
    y : 60,
    ease: Expo.easeInOut
})