const menuButton = document.querySelector(".menu-btn");
const firstLine = menuButton.querySelector(".first-line");
const secondLine = menuButton.querySelector(".second-line");
const thirdLine = menuButton.querySelector(".third-line");
const nav = document.querySelector(".nav-links");
// const heroDescription = document.querySelector(".hero-description");

// if(!nav.className.includes("show")){
//     heroDescription.style.zIndex = '200';
// }

// else{
//     heroDescription.style.zIndex = '1';   
// }

menuButton.addEventListener("click", () => {

    // if(!nav.className.includes("show")){
    //     heroDescription.style.zIndex = '-1';
    // }
    
    // else{
    //     heroDescription.style.zIndex = '200';   
    // }

    firstLine.classList.toggle("first-line-transform");
    secondLine.classList.toggle("second-line-transform");
    thirdLine.classList.toggle("third-line-transform");
    nav.classList.toggle("show")
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 6){
        menuButton.style.display = 'none'
    }

    else{
        menuButton.style.display = 'flex'
    }
})

// MODE SWITCHING.
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

light.addEventListener("click", () => {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    light.style.display = 'none';
    dark.style.display = 'inline-block'    
});

dark.addEventListener("click", () => {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    dark.style.display = 'none';
    light.style.display = 'inline-block'
})

