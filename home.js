      let slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

      // code for hamburger responsiveness
      const hamburger = document.querySelector('.hamburger');
      const mobile_menu = document.querySelector('nav .landUl');
      const menu_item = document.querySelectorAll('nav .landUl .landLi a');
      const header = document.querySelector('.pg-div');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

        if (hamburger.classList.contains("active")) {
          document.body.style.overflow = "hidden";        
            } else {
              document.body.style.overflow = "auto";
        }


      });
      
      document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
          header.style.backgroundColor = 'white';
        } else {
          header.style.backgroundColor = 'transparent';
        }
      });



      menu_item.forEach((item) => {
        item.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          mobile_menu.classList.toggle('active');
        });
      });

      function reveal() {
        var reveal = document.querySelectorAll(".reveal");
        
        for (var i = 0; i < reveal.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveal[i].getBoundingClientRect().top;
          var elementVisible = 150;
        
          if (elementTop < windowHeight - elementVisible) {
          reveal[i].classList.add("active");
          } else {
          reveal[i].classList.remove("active");
          }
        }
        }
        
        window.addEventListener("scroll", reveal);
        
      // code for responsiveness ends