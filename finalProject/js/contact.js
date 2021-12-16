const apiURL = `board.json`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
    const members = jsObject['members'];

    for (let i = 0; i < members.length; i++) {
      let card = document.createElement('div');
      card.setAttribute('class','name-card');
      let h5 = document.createElement('h5');
      let p = document.createElement('p');
      
      h5.textContent =members[i].name;
      p.textContent = members[i].position;

      card.appendChild(h5);
      card.appendChild(p);
      document.querySelector('.name-cards').appendChild(card);
    }
  });