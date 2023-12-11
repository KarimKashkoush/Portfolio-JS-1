// Local Variable
let body = document.body;

// Start Header //
let header = document.getElementById("header");
document.onscroll = () => {
    if (scrollY > 250) {
        header.style.backgroundColor = "#1a1330";
        header.style.boxShadow = "0 -5px 20px -5px white";
        header.style.paddingBlock = "10px";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.style.paddingBlock = "20px";
    }
};

if (scrollY > 250) {
    header.style.backgroundColor = "#1a1330";
    header.style.boxShadow = "0 -5px 20px -5px white";
    header.style.paddingBlock = "10px";
}
//End Header//

// Open Nav //
let openNav = document.getElementById("openNav");
let CloseNav = document.getElementById("CloseNav");
let navbar = document.querySelector(".navbar");
openNav.onclick = () => {
    navbar.style.left = 0;
};
CloseNav.onclick = () => {
    navbar.style.left = "-100%";
};

let navLinks = document.querySelectorAll(".nav-links .nav-link");

navLinks.forEach((ele) => {
    ele.onclick = function () {
        navLinks.forEach((e) => {
            e.classList.remove("active");
        });
        this.classList.add("active");
        navbar.style.left = "-100%";
    };
});
// End Nav //

// Start open Read Me //
let readMe = document.getElementById("readMe");
let openReadMe = document.getElementById("openReadMe");
let closeReadMe = document.getElementById("closeReadMe");

openReadMe.onclick = function () {
    readMe.style.display = "block";
    body.classList.toggle("layout");
};
closeReadMe.onclick = function () {
    readMe.style.display = "none";
    body.classList.remove("layout");
};

// End open Read Me //


// Start Form //
let form = document.getElementById("form");
let nameUser = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let textArea = document.getElementById("textArea");
// End Form //


// Footer //
let years = document.querySelector("#copyRight span");

years.innerHTML = new Date().getFullYear();