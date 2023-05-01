
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

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// code for hamburger responsiveness ends


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

// code for dropdown options under map
document.querySelector(".mO1 .dropdown").addEventListener("click", () => {
  document.querySelector(".mO1 .dropdown ul").classList.toggle("active");
})

document.querySelector(".mO2 .dropdown").addEventListener("click", () => {
  document.querySelector(".mO2 .dropdown ul").classList.toggle("active");
})
// code for dropdown under map'

//code for gsap animations

const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
  .from(".bg-div", {
    scrollTrigger: ".bg-div",
    y:"-100%", ease:"bounce"
  })
  .from(".logo-imgBox", {
    scrollTrigger: ".logo-imgBox",
    x: "-50vh"
  })
  .from(".navBox", {
    scrollTrigger: ".navBox",
    opacity: 0, stagger: 1
  })
  .from(".Ibox1", {
    scrollTrigger: ".Ibox1",
    x: "-100%",
    opacity: 0
  },1)
  .from(".Ibox2", {
    scrollTrigger: ".Ibox2",
    x: "100%",
    opacity: 0
  },1)
  .from(".grid-item", {
    scrollTrigger: ".MLCbox1 img",
    scale: 0.1, 
    y: 60,
    yoyo: true, 
    // repeat: -1, 
    ease: "power1.inOut",
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "left"
    }
  })
  .from(".imgBox1 img", {
    scrollTrigger: ".imgBox1",
    scale: .5, 
    start: "top top",
    scrub: 1,
    y: 60,
    duration: 2.5,
    yoyo: true, 
    // repeat: -1, 
    ease: "power1.inOut",
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "left"
    }
  })
  .from(".Box", {
    scrollTrigger: ".Box",
    start: "top top",
    x: -50,
    yoyo: true, 
    // repeat: -1, 
    ease: "power1.inOut",
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "left"
    }
  })
//code for gsap animations