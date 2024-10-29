function openNav() {
  document.getElementById('sidenav').style.width = '200px';
  document.getElementById('main').style.marginRight = '200px';
}
function closeNav() {
  document.getElementById('sidenav').style.width = '0px';
  document.getElementById('main').style.marginRight = '0px';
}

let mybutton = document.getElementById('goTop');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
