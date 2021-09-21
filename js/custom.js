// Change background color for navbar 
// Select on navbar & header components
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(this.scrollY >= header.clientHeight /2){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
})

// Adjust create typer write in header
let typer = document.querySelector('.typer'),
    theText = document.querySelector('.typer').getAttribute('data-text'),
    theTextLength = theText.length,
    n = 0;

    // typer.innerHTML  =  theText

    (function theTyper(){
        if(n < theTextLength ){
            typer.innerHTML  +=  theText.charAt(n);
            n++;
            setTimeout(theTyper, 200)
        }
    })()



// Add class list active in navbar link when click
// Select on navbar link
const navLinks = document.querySelectorAll('.navbar .navbar-nav .nav-link')


navLinks.forEach(navlink => {
    // Remove class active and add to current target 
    navlink.addEventListener('click', (e) =>{
        e.preventDefault();
        const active = document.querySelector('.nav-link.active');
        if(active){
            active.classList.remove('active');
        }
        e.currentTarget.classList.add('active')
        // Select on section by data scroll
        let section = document.getElementById(navlink.getAttribute('data-scroll'))
        scrolling(section)
    })
})


// Show & hide button top when scroll
// Select on button top element
const buttonTop = document.querySelector(".button-top");
window.addEventListener("scroll", () =>{
    // Show Button top when scrolling greater then 1000 and hide otherwise
    if(this.scrollY >= 1000){
        buttonTop.style.display = "block";
    }else{
        buttonTop.style.display = "none";
    }
})

// Adjust scroll to top when click in button top with smoothly
buttonTop.addEventListener("click", () =>{
    window.scroll({
        behavior: "smooth",
        top: 0,
        left: 0,
    })
})


// Scrolling method
function scrolling(element){
    window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop - 50
    })
}
