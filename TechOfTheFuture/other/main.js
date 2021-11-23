const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // ! Toggle nav
        nav.classList.toggle('nav-active');

        // ? Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;//? the delay of the nav li to show up
            } 
        });
        
        //?Burger Animation the three lines
        burger.classList.toggle('toggle');
    });
    
}

navSlide(); 