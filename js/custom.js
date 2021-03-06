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


// Adjust calculate height full screen for header
// let mediumDevices = window.

// if(window.innerWidth <= 991){
//     console.log('True')
//     navbar.classList.add('nav-md');
// }


// // if(navbar.classList.contains('nav-md')){
// //     // Add margin top to body 
// //     document.body.style.marginTop = navbar.clientHeight + "px";
// //     // calculate the header
// //     header.style.minHeight = window.innerHeight - navbar.clientHeight + "px";
// // }else{
// //     document.body.style.marginTop = 0 + "px";
// //     header.style.minHeight = window.innerHeight;

// // }

// Adjust create typer write in header
let typer = document.querySelector('.typer'),
    theText = document.querySelector('.typer').getAttribute('data-text'),
    theTextLength = theText.length,
    n = 0;


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

// Show and hide setting box when click on cog setting icon
// Select on setting box icon
const settingBoxIcon = document.querySelector(".setting-box .cog-box");
// Select on setting box cog 
const settingBoxCog = document.querySelector(".setting-box .cog-box i");
// Select on setting box
const settingBox = document.querySelector(".setting-box")


settingBoxIcon.addEventListener("click", () => {

    // Add fa-spin class list to cog setting 
    settingBoxCog.classList.toggle("fa-spin");

    // add open class list to setting box container
    settingBox.classList.toggle("open")

})

// Switch color
const colorsLi = document.querySelectorAll(".setting-box .color-list li")
// Loop on every li color
colorsLi.forEach(colorLi => {
    colorLi.addEventListener("click", e =>{
        // Set property any li color
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        // Set to local storage
        localStorage.setItem("color_option", e.target.dataset.color)
        // Remove active class list from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove('active')
        });
        // Add active class list
        e.target.classList.add("active")

    })
})

// check if local storage color option
const mainColors = localStorage.getItem("color_option")

if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color', mainColors);

    colorsLi.forEach(element => {
        element.classList.remove('active')
        // Add active on element
        if(element.dataset.color === mainColors){
            element.classList.add('active')
        }
    })

}


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

// Create Model for img portfolio
// Select on eye icon element
let portfolioImages = document.querySelectorAll(".portfolio .portfolio-image .content");
portfolioImages.forEach(portfolioImage => {
    portfolioImage.addEventListener("click", (e)=>{
        // Create overlay element
        let overlay = document.createElement("div");
        // Add class to overlay
        overlay.className = "popup-overlay";
        // Append overlay to the body
        document.body.appendChild(overlay);
        // Create the popup box
        let popupBox = document.createElement("div");
        // Add class to popupBox
        popupBox.className = "popup-box";
    
        document.body.appendChild(popupBox);

        // Get portofolio image 
        let img = portfolioImage.children[0],
        
            title = portfolioImage.parentElement.children[1].children[0].textContent;

        if (img.alt !== null) {
            // Create heading
            let imgHeading = document.createElement("h3");
            // Create text for heading
            let imgText = document.createTextNode(title);
            // Append the text to the heading
            imgHeading.appendChild(imgText);
            // Append the heading to popup box
            popupBox.appendChild(imgHeading);
        }
        // Create the image
        let popupImg = document.createElement("img");
        // Set image box
        popupImg.src = img.src;
        // Append image to popup box
        popupBox.appendChild(popupImg);
        // Append the popup box to body
        document.body.appendChild(popupBox);
        // Create the element for close
        let closeButton = document.createElement("span");
        // Create the text
        let closeButtonText = document.createTextNode("X");
        // Append the text node to close button
        closeButton.appendChild(closeButtonText);
        // Append class to close button
        closeButton.className = "close-button";
        // Append close button to popup box
        popupBox.appendChild(closeButton)

    })
})

// close popup
document.addEventListener("click",(e)=>{

    if(e.target.className == "close-button"){
    // Remove the popup
    e.target.parentNode.remove();
    // Remove the overlay
    document.querySelector(".popup-overlay").remove()
    }
})
