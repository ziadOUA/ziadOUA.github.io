const homeIcon = document.querySelector("#home-icon");
// const mobileHomeIcon = document.querySelector("mobile-home-icon");
const reposIcon = document.querySelector("#repos-icon");
// const mobileReposIcon = document.querySelector("mobile-repos-icon");
const infoIcon = document.querySelector("#info-icon");
// const mobileInfoIcon = document.querySelector("mobile-info-icon");
const contactIcon = document.querySelector("#contact-icon");
// const mobileContactIcon = document.querySelector("mobile-contact-icon");
const topHeader = document.querySelector('.name')

const homeContent = document.querySelector("#home-page")
const reposContent = document.querySelector('#repos-page')
const infoContent = document.querySelector("#info-page")
const contactContent = document.querySelector("#contact-page")

function homeSelectedStyling() {
    homeIcon.classList.add("selected");
    // mobileHomeIcon.classList.add("selected");
    homeContent.className = "home page visible";
    topHeader.innerHTML = 'Home'
}

function homeUnselectedStyling() {
    homeIcon.classList.remove("selected");
    // mobileHomeIcon.classList.remove("selected");
    homeContent.className = "home page hidden";
}

function infoSelectedStyling() {
    infoIcon.classList.add("selected");
    // mobileInfoIcon.classList.add("selected");
    infoContent.className = "info page visible";
    topHeader.innerHTML = 'Informations'
}

function infoUnselectedStyling() {
    infoIcon.classList.remove("selected");
    // mobileInfoIcon.classList.remove("selected");
    infoContent.className = "info page hidden";
}

function reposSelectedStyling() {
    reposIcon.classList.add("selected");
    // mobileReposIcon.classList.add("selected");
    reposContent.className = "repos page visible";
    topHeader.innerHTML = 'Repositories'
}

function reposUnselectedStyling() {
    reposIcon.classList.remove("selected");
    // mobileReposIcon.classList.remove("selected");
    reposContent.className = "repos page hidden";
}

function contactSelectedStyling() {
    contactIcon.classList.add("selected");
    // mobileContactIcon.classList.add("selected");
    contactContent.className = "contact page visible";
    topHeader.innerHTML = 'Contact'
}

function contactUnselectedStyling() {
    contactIcon.classList.remove("selected");
    // mobileContactIcon.classList.remove("selected");
    contactContent.className = "contact page hidden";
}

function homeSelected() {
    if (homeIcon.className === "icon-container") {
        homeSelectedStyling()
        infoUnselectedStyling()
        reposUnselectedStyling()
        contactUnselectedStyling()
    }
}

function reposSelected() {
    if (reposIcon.className === "icon-container") {
        reposSelectedStyling()
        homeUnselectedStyling()
        infoUnselectedStyling()
        contactUnselectedStyling()
    }
}

function infoSelected() {
    if (infoIcon.className === "icon-container") {
        infoSelectedStyling()
        homeUnselectedStyling()
        reposUnselectedStyling()
        contactUnselectedStyling()
    }
}

function contactSelected() {
    if (contactIcon.className === "icon-container") {
        contactSelectedStyling()
        homeUnselectedStyling()
        reposUnselectedStyling()
        infoUnselectedStyling()
    }
}