// handles_dark_mode();
// handle_day_phrases();
handle_nav();

function handle_nav() {
    const nav_home = document.getElementById("nav-home");
    const nav_project = document.getElementById("nav-project");
    const nav_dashboard = document.getElementById("nav-dashboard");
    const nav_contact = document.getElementById("nav-contact");
    const iframe = document.getElementsByTagName("iframe")[0];
    let nav_active = document.getElementsByClassName("nav-active")[0];

    nav_home.addEventListener("click", () => {
        nav_active.classList.remove("nav-active");
        nav_active = nav_home;
        nav_home.classList.add("nav-active");

        console.log("Showing nav_home");
        iframe.src = "./pages/home.html";
    });
    nav_project.addEventListener("click", () => {
        nav_active.classList.remove("nav-active");
        nav_active = nav_project;
        nav_project.classList.add("nav-active");

        console.log("Showing nav_project");
        iframe.src = "./pages/project.html";
    });
    nav_contact.addEventListener("click", ()=>{
        nav_active.classList.remove("nav-active");
        nav_active = nav_contact;
        nav_contact.classList.add("nav-active");

        iframe.src = "./pages/contact.html";
        console.log("showing nav_contact");
    })
    nav_dashboard.addEventListener("click",  ()=>{
        nav_active.classList.remove("nav-active");
        nav_active = nav_dashboard;
        nav_dashboard.classList.add("nav-active");

        iframe.src = "./pages/dashboard.html";
        console.log("showing nav_dashboard");
    })
}

function handles_dark_mode() {
    const dark_mode_button = document.getElementsByClassName("dark-mode-button")[0];

    dark_mode_button.addEventListener("click", () => {
        if (dark_mode_button.innerHTML == "🌙") {
            dark_mode_button.innerHTML = "☀️";
            dark_mode_button.style.backgroundColor = "white";
            turn_dark_mode(false);
        } else {
            dark_mode_button.innerHTML = "🌙";
            dark_mode_button.style.backgroundColor = "gray";
            turn_dark_mode(true);
        }
    });

    function turn_dark_mode(on = true) {
        const body = document.getElementsByTagName("body")[0];
        const header = document.getElementsByTagName("header")[0];
        
        if (on) {
            body.style.backgroundColor = "#303030";
            body.style.color = "#f5f5f5";
            header.style.color = "black";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            header.style.color = "black";
        }
    }
}

function handle_day_phrases() {
    const random_phrases = [
        "Que a força esteja com você!",
        "O bug nunca será maior que a espada!",
        "Eu me borrei...",
        "Simplicidade ao invés de complexidade"
    ];

    const random_phrase_element = document.getElementById("random-phrase");
    random_phrase_element.style.minHeight = "2rem";
    const rand = Math.floor(Math.random() * random_phrases.length);
    random_phrase_element.innerHTML = random_phrases[rand];
}
