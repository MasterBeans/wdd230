const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing


    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement('section');
      let cardDetails = document.createElement('div');


      let h3 = document.createElement('h3');
      let paraMotto = document.createElement('p');
      let paraFounded = document.createElement('p');
      let paraPopulation = document.createElement('p');
      let paraRainfall = document.createElement('p');
      let eventsHeader = document.createElement('h4');
      let imgTown = document.createElement('img');


      h3.textContent = towns[i].name;
      paraMotto.textContent = towns[i].motto;
      paraFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      paraPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
      paraRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
      paraMotto.setAttribute('id', 'motto');
      eventsHeader.textContent = 'Town Events';

      cardDetails.appendChild(h3);
      cardDetails.appendChild(paraMotto);
      cardDetails.appendChild(paraFounded);
      cardDetails.appendChild(paraPopulation);
      cardDetails.appendChild(paraRainfall);
      cardDetails.appendChild(eventsHeader);

      for (let j = 0; j < towns[i].events.length; j++) {
        let event = document.createElement('p');
        event.textContent = towns[i].events[j];
        event.setAttribute('id', 'events');
        cardDetails.appendChild(event);
      }






      imgTown.src = 'images/towns/' + towns[i].photo;
      imgTown.loading = 'lazy';
      imgTown.alt = `${towns[i].name}`;




      card.appendChild(cardDetails)
      card.appendChild(imgTown);

      //card.appendChild(img);
      if (towns[i].name == 'Preston') {
        document.querySelector('div.cards').appendChild(card);
      }
      if (towns[i].name == 'Soda Springs') {
        document.querySelector('div.cards').appendChild(card);
      }
      if (towns[i].name == 'Fish Haven') {
        document.querySelector('div.cards').appendChild(card);
      }

    }
  });