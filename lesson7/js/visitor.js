const currDate = new Date();
let count = 0;
if (localStorage.getItem('firstvisit') == null){
  localStorage.setItem('firstvisit',currDate);
  localStorage.setItem('visitcounts', 1);
  localStorage.setItem('lastvisit', currDate);
}
else{
  count = parseInt(localStorage.getItem('visitcounts')) + 1
  localStorage.setItem('visitcounts', count.toString());
}


const last = new Date(localStorage.getItem('lastvisit'));
const counts = parseInt((currDate.getTime()-last.getTime())/ (24*3600*1000));


document.getElementById('visits').innerHTML = "Your last visit  : " + counts + " days ago";
document.getElementById('counts').innerHTML = "Your visit counts: " + localStorage.getItem('visitcounts');
localStorage.setItem('lastvisit',visit)
