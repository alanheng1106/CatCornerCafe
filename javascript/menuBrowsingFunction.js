// Waits for the page to fully load before allowing this function to run
document.addEventListener("DOMContentLoaded", function () {
    // Selecting relevant divs 
    document.querySelectorAll(".menu-container").forEach(menuContainer => {
        const container = menuContainer.querySelector(".menu-items");
        const prevBtn = menuContainer.querySelector(".prev");
        const nextBtn = menuContainer.querySelector(".next");
        // making the function scroll 300 pixels to the left 
        function scrollLeft() {
            container.scrollBy({ left: -300, behavior: "smooth" });
        }
        // making the function scroll 300 pixels to the righ
        function scrollRight() {
            container.scrollBy({ left: 300, behavior: "smooth" });
        }

        // Assign functions to buttons so that the user can interact with it
        prevBtn.addEventListener("click", scrollLeft);
        nextBtn.addEventListener("click", scrollRight);
    });
});
