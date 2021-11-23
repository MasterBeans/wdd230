const APPID = "1da91723321396cba3166b2a18fc0112"
const city = 5604473


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APPID}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc; 
    document.getElementById('icon').setAttribute('src', imagesrc); 
    document.getElementById('icon').setAttribute('alt', desc);
    
  });