"use strict";

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyBar()};



// Get the navbar
var navbar = document.getElementById("navDiv");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



showDate();

function showDate() {
   var today = new Date();
   var thisYear = today.getFullYear();
   document.getElementById('myYear').innerHTML = "<span>" + thisYear + "</span>";
}

