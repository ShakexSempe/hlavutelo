const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside');
const links = document.querySelectorAll('header a');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const homebtn = document.querySelector('.home-button');
const footerNav = document.querySelector('.footer-nav');
console.log(footerNav);

// HAMBURGER TOGGLE
hamburger.addEventListener("click", () => {
    aside.classList.toggle("active");
    hamburger.classList.toggle("active");
    if(header.classList.contains("hero-header")){
        header.classList.toggle('hero-header');
        header.classList.toggle('aside-header');
    }
    container.classList.toggle("active-container");
});


// REMOVE HAMBURGER ON LINK CLICK
links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        aside.classList.remove("active");
        header.classList.remove("aside-header");
        container.classList.remove("active-container");
    });
});

// HERO INTERSECTION OBSERVER
const hero = document.querySelector('.hero');
const heroOptions = {
    rootMargin: '-85% 0px 0px 0px',
}
const heroObserver = new IntersectionObserver(
    function( entries, heroObserver) {
        entries.forEach( entry => {
            if(!entry.isIntersecting) {
                console.log("Her NOT io");
                header.classList.remove('hero-header');
                homebtn.classList.add('active');
                footerNav.classList.add('active-footer');
            } else {
                console.log("hero IS io");
                header.classList.add('hero-header');
                homebtn.classList.remove('active');
                footerNav.classList.remove('active-footer');
            }
        });
    }, heroOptions
);
heroObserver.observe(hero);

// SECTION TITLE INTERSECTION OBSERVERS
const titles = document.querySelectorAll(".section-title");
const titlesOptions = {
    rootMargin: '00% 0px -50% 0px',
}

titles.forEach(title => {
    const titleObserver = new IntersectionObserver(
        function(entries, titleObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    console.log("title NOT io");
                    title.classList.remove("active-title");
                } else {
                    console.log("title is io");
                    title.classList.add("active-title");
                }
            });
        }, titlesOptions
    );

    titleObserver.observe(title);
});


const ioItem = document.querySelectorAll('.io-item');
const itemOptions = {
    rootMargin: '0px 0px -20% 0px', 
} 

ioItem.forEach(item => {
    const itemObserver = new IntersectionObserver(
        function(entries, itemObserver) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log("Item NOT io");
                    item.classList.remove("active-item");
                } else {
                    console.log("Item IS io");
                    item.classList.add("active-item");
                }
            })
        }, itemOptions
    );
    itemObserver.observe(item);
});
