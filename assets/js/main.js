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
const form = document.getElementById("form"),
    userName = document.getElementById("userName"),
    email = document.getElementById("email"),
    textArea = document.getElementById("massege");
let formBtn = document.getElementById("formBtn");
let formvalid = false;

form.addEventListener("submit", (e) => {
    validateUserName();
    validateEmail();
    validatetextArea();
    if (formvalid === false) {
        e.preventDefault();
    }
});


const setError = (ele, error) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector(".error-text");
    errorDisplay.innerHTML = error;
    ele.classList.remove("success");
    ele.classList.add("error");
    formvalid = false;
};

const setSuccess = (ele) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector(".error-text");
    errorDisplay.innerHTML = "";
    ele.classList.remove("error");
    ele.classList.add("success");
    formvalid = true;
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateUserName = () => {
    const userNameValue = userName.value.trim();

    if (userNameValue === "") {
        setError(userName, "please write your name");
    } else if (userNameValue.length <= 2) {
        setError(
            userName,
            "please enter a valid name, as the name must contain more than two letters"
        );
    } else {
        setSuccess(userName);
    }
};

userName.onblur = ()=> {
    validateUserName();
}

const validateEmail = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "provide a valid email address");
    } else {
        setSuccess(email);
    }
};

email.onblur = ()=> {
    validateEmail();
}

const validatetextArea = () => {
    const textAreaValue = textArea.value.trim();

    if (textAreaValue === "") {
        setError(textArea, "please enter your massege");
    } else {
        setSuccess(textArea);
    }
};

textArea.onblur = ()=> {
    validatetextArea();
}


// End Form //

// Footer //
let years = document.querySelector("#copyRight span");

years.innerHTML = new Date().getFullYear();
