const APPID = "1da91723321396cba3166b2a18fc0112"
const lat = 11.0384
const lon = 124.6193


const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    

    const current = jsObject['current'];
    document.getElementById('current-weather').textContent = 
    "Temp : "+ current['temp'] + String.fromCharCode(176) + 'C' + 
    " | Weather Condition : " + capitalizeFirstLetter(current['weather'][0]['description']) +
    " | Humidity : " + current['humidity'] + String.fromCharCode(37);
    
   
    const alerts = jsObject['alerts'];
    if(alerts != null){
    // document.getElementById('alert').textContent = 
    // alerts[0]['sender_name'] + " : " + alerts[0]['description'];
      const div = document.createElement('div');
      div.setAttribute('class', 'alert');

      const span = document.createElement('span');
      span.setAttribute('class', 'closebtn');
      span.setAttribute('onclick', "this.parentElement.style.display='none';");
      span.innerHTML = '&times;';
      
      const para = document.createElement('p');
      para.setAttribute('id', 'alert')
      para.textContent = alerts[0]['sender_name'] + " : " + alerts[0]['description'];
    
      div.appendChild(span);
      div.appendChild(para);
      document.getElementById('alerts').appendChild(div);

      console.log('no alert');
    }
    


    
    let date = new Date();
    const daily = jsObject['daily'];
   
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday']

    document.querySelector(`#day1`).textContent = dayOfWeek[date.getDay()+1];
    document.getElementById('day1-weather').textContent = 
    "Temp : "+ daily[0]['temp']['max'] + String.fromCharCode(176) + 'C' + 
    " | Weather Condition : " + capitalizeFirstLetter(daily[0]['weather'][0]['description']) +
    " | Humidity : " + daily[0]['humidity'] + String.fromCharCode(37);
    
    document.querySelector(`#day2`).textContent = dayOfWeek[date.getDay()+2];
    document.getElementById('day2-weather').textContent = 
    "Temp : "+ daily[1]['temp']['max'] + String.fromCharCode(176) + 'C' + 
    " | Weather Condition : " + capitalizeFirstLetter(daily[1]['weather'][0]['description']) +
    " | Humidity : " + daily[1]['humidity'] + String.fromCharCode(37);
    
    document.querySelector(`#day3`).textContent = dayOfWeek[date.getDay()+3];
    
    document.getElementById('day3-weather').textContent = 
    "Temp : "+ daily[2]['temp']['max'] + String.fromCharCode(176) + 'C' + 
    " | Weather Condition : " + capitalizeFirstLetter(daily[2]['weather'][0]['description']) +
    " | Humidity : " + daily[2]['humidity'] + String.fromCharCode(37);
    
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }