let header = document.getElementById("header");
document.onscroll = () => {
    if (scrollY > 250) {
        header.style.backgroundColor = "#090516";
        header.style.boxShadow = "0 -5px 20px -5px white";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
};
// =============== //
let openNav = document.getElementById("openNav");
let CloseNav = document.getElementById("CloseNav");
let navbar = document.querySelector(".navbar");
openNav.onclick = () => {
    navbar.style.left = 0;
};
CloseNav.onclick = () => {
    navbar.style.left = "-100%";
};

let navLinks = document.querySelectorAll('.nav-links .nav-link')

navLinks.forEach((ele)=> {
    ele.onclick = function() {
        navLinks.forEach((e)=> {
            e.classList.remove("active")
        })
        this.classList.add("active")
    }
})
