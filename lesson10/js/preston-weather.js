const APPID = "1da91723321396cba3166b2a18fc0112"
const city = 5604473


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.querySelector('#summary').textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#high').textContent = jsObject.main.temp + String.fromCharCode(176) + 'F';
    document.querySelector('#humidity').textContent = jsObject.main.humidity + String.fromCharCode(37)
    document.querySelector('#wind').textContent = jsObject.wind.speed;
    document.querySelector('#chill').textContent = windChill(jsObject.main.temp, jsObject.wind.speed);


  });

//forecast
const apiURLforecast = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${APPID}&units=imperial`;
fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const result = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));

    document.querySelector('#summary').textContent = result[0].weather[0].description.toUpperCase();
    document.querySelector('#high').textContent = result[0].main.temp + String.fromCharCode(176) + 'F';
    document.querySelector('#humidity').textContent = result[0].main.humidity + String.fromCharCode(37)
    document.querySelector('#wind').textContent = result[0].wind.speed;
    document.querySelector('#chill').textContent = windChill(result[0].main.temp, result[0].wind.speed);


    
    
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = 0;
    result.forEach(forecast => {
      let imagesrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
      let description = forecast.weather[0].description;
      let date = new Date(forecast.dt_txt);

      document.querySelector(`#day${day + 1}`).textContent = dayOfWeek[date.getDay()];
      document.querySelector(`#temp${day + 1}`).textContent = forecast.main.temp + '°F';
      document.querySelector(`#icon${day + 1}`).setAttribute('src', imagesrc);
      // document.querySelector(`#icon${day + 1}`).setAttribute('alt', description);
      day++;

    });
  });



function windChill(temp, wSpeed) {

  if (temp <= 50 && wSpeed > 3) {
    let chill = 35.74 + 0.6215 * temp - 35.75 *
      Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
    chill = chill.toFixed(0) + String.fromCharCode(176) + 'F';
    return chill;
  } else {
    return "N/A";
  }
}