const openMenu = document.querySelector('.openMenu')
const sideNavHeader = document.querySelector('.sideNavHeader')
const navMenu = document.querySelector('.navMenu')
const sidenav = document.querySelector('.sidenav')

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function myFunction(x) {
  if (x.matches) {
    openMenu.style.display = "";
    sideNavHeader.style.display = "";
    navMenu.style.display = "block";
  } else {
    openMenu.style.display = "none";
    sideNavHeader.style.display = "none";
    navMenu.style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes