//Waits for the relevant section to load before executing functions
//so here it waits for the promotions to load before running
window.onload = function () {

  //Getting the Document Object elements
    const slides = document.getElementById("slides");
    const dots = document.querySelectorAll(".dot");

    //Autocounting how many images are present
    const totalSlides = slides.children.length;

    // Setting the counter for the promotion images (starting the count from 0)
    // this is to dynamically keep track of images and update the functions accordingly
    let currentIndex = 0;
    const slider = document.querySelector(".slider");

    // Making the promotion images scroll to the next every 5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Updating slide locations and the current statuses of the dots present in the middle bottom of the slideshow
    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    // Setting the function to jump to the next slide 
    // this function is called in the html code using the "nav prev" class
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      //
      updateSlider();
    }

    //allows the "nextSlide" function usable anywhere in the window
    window.nextSlide = nextSlide;

    // Similar to the "nextSlide" function, but it goes back a slide instead
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    window.prevSlide = prevSlide;
    
    // Jump to the specific slide
    window.goToSlide = function(index) {
      currentIndex = index;
      updateSlider();
    }
    
    // When the user mouse enter the banner, the banner will stop to auto slide
    slider.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));

    // When the user mouse leave the banner, the banner will start to auto slide again
    slider.addEventListener("mouseleave", () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    });

    updateSlider();
  };