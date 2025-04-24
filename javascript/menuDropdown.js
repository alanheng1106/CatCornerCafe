//Waiting for the page to load before allowing the function to run, and treats each anchor tag independently 
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    //sets up a click event 
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // avoid the default function which is when click the nav will jump to the specific section
        
        const targetId = this.getAttribute('href');  //gets the href value e.g. desserts section or coffee section
        const targetElement = document.querySelector(targetId); //querySelector will find the first element that match href
        
        //finds the value as taken by const previously
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Offset for better visibility for the user 
                behavior: 'smooth'
            });
        }
    });
});