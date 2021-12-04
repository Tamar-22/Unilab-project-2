const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const footerMenu1 = document.querySelector("footer");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    footerMenu1.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    footerMenu1.classList.toggle("active");
}))
