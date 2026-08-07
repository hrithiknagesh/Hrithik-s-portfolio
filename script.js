const words = [
    "HTML Developer",
    "CSS Developer",
    "JavaScript Developer",
    "React.js Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            currentWord.substring(0, j++);

        if (j > currentWord.length) {

            isDeleting = true;

            setTimeout(type, 1000);

            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, j--);

        if (j < 0) {

            isDeleting = false;

            i++;

            if (i == words.length) {

                i = 0;

            }

        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();



const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-theme");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});