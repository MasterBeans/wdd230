const list = document.querySelector(".list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

button.addEventListener('click', function() { 
  if(input.value == ''){
    alert("Please type a chapter from the Book of Mormon")
  }
  else{
    const listChap = document.createElement("li");
	  const listText = document.createElement("span");
	  const listBtn = document.createElement("button");


    list.appendChild(listChap);
    listChap.appendChild(listText).textContent = input.value;
    listChap.appendChild(listBtn).textContent = "\u274C";

    listBtn.addEventListener("click", (e) => {
      list.removeChild(listChap);
      list.removeChild(listText);
      list.removeChild(listBtn);

    });
  }

  input.value = "";
  input.focus();
});