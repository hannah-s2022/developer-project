// scroll to top button
const topButton = document.getElementById("scroll-button");

window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block"; 
    } else {
        topButton.style.display = "none"; 
    }
}

//When user clicks button, scroll to top of page
function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

// Nav hamburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-item");

navItem.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
