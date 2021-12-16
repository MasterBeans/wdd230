var wrapper = document.getElementById("wrapper");

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;

  // List view
  event.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove("list");
});

const apiURL = `directory.json`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
    

    const members = jsObject['members'];

    for (let i = 0; i < members.length; i++) {
      let card = document.createElement('div');
      card.setAttribute('class','col');
      let h2 = document.createElement('h2');
      let paraAddress = document.createElement('p');
      let paraContact = document.createElement('p');
      let aWeblink = document.createElement('a');
      let img = document.createElement('img');

      h2.textContent =members[i].businessName;
      paraAddress.textContent = members[i]['address'].streetAddress + ', ' +
                                members[i]['address'].city + ', ' +
                                members[i]['address'].province + ', ' +
                                members[i]['address'].postalCode;
      paraContact.textContent = members[i]['phoneNumbers'].number;
      aWeblink.textContent = members[i].link;
      aWeblink.href = members[i].link;
      img.src = members[i].logo;
      img.loading = 'lazy';
      img.alt =members[i].businessName ;

      card.appendChild(h2);
      card.appendChild(paraAddress);
      card.appendChild(paraContact);
      card.appendChild(aWeblink);
      card.appendChild(img);
      document.querySelector('#wrapper').appendChild(card);
    }



  });