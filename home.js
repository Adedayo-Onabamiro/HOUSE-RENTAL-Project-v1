
// slideshow code starts

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//slideshow code ends


// code for hamburger responsiveness
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('nav .landUl');
const menu_item = document.querySelectorAll('nav .landUl .landLi a');
const menu_options = document.querySelector('.landUl a');
const header = document.querySelector('.pg-div');



hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > mobile_menu.style.height) {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  } else {
    // hamburger.classList.add('active');
    // mobile_menu.classList.add('active');
  }
});


// document.addEventListener('scroll', () => {
//   var scroll_position = window.scrollY;
//   if (scroll_position > 250) {
//     header.style.backgroundColor = 'white';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// });



menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});


// code for responsiveness ends


//code for pagination active changing starts
// Add active class to the current button (highlight it)
var pheader = document.getElementById("pagination");
var pbtns = pheader.getElementsByClassName("pbtn");
for (var p = 0; p < pbtns.length; p++) {
  pbtns[p].addEventListener("click", function() {
  var pcurrent = document.getElementsByClassName("pactive");
  pcurrent[0].className = pcurrent[0].className.replace(" pactive", "");
  this.className += " pactive";
  });
}
//code for pagination active changing end

// //code for map
// require([
//   "esri/config", "esri/Map", "esri/views/MapView"],
//    function(esriConfig, Map, MapView) {
//     esriConfig.apiKey = "YOUR_API_KEY";
//     const map = new Map({
//       basemap: "arcgis-topographic" 
//       // Basemap layer service
//     });
  
//     const view = new MapView({
//       map: map,
//       center: [-118.805, 34.027], // Longitude, latitude
//       zoom: 13, // Zoom level
//       container: "viewDiv" // Div element
//     });
  
//    })

// code for dropdown under map
document.querySelector(".mO1 .dropdown").addEventListener("click", () => {
  document.querySelector(".mO1 .dropdown ul").classList.toggle("active");
})

document.querySelector(".mO2 .dropdown").addEventListener("click", () => {
  document.querySelector(".mO2 .dropdown ul").classList.toggle("active");
})