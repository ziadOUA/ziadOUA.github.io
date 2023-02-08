const pageContentWrapper = document.querySelector('.page-content-wrapper');

const homeIcon = document.querySelector("#home-icon");
const mobileHomeIcon = document.querySelector("#mobile-home-icon");
const reposIcon = document.querySelector("#repos-icon");
const mobileReposIcon = document.querySelector("#mobile-repos-icon");
const infoIcon = document.querySelector("#info-icon");
const mobileInfoIcon = document.querySelector("#mobile-info-icon");
const contactIcon = document.querySelector("#contact-icon");
const mobileContactIcon = document.querySelector("#mobile-contact-icon");
const topHeader = document.querySelector('.name')

const homeContent = document.querySelector("#home-page")
const reposContent = document.querySelector('#repos-page')
const infoContent = document.querySelector("#info-page")
const contactContent = document.querySelector("#contact-page")

const mobileNavPanel = document.querySelector(".mobile-panel-wrapper")

if (localStorage.getItem('page-section') === null){
    localStorage.setItem('page-section', 'home');
}

let sectionOnLoad = localStorage.getItem("page-section");

if (sectionOnLoad === "home") {
    homeSelected();
}

if (sectionOnLoad === "repos") {
    reposSelected();
}

if (sectionOnLoad === "info") {
    infoSelected();
}

if (sectionOnLoad === "contact") {
    contactSelected();
}

function homeSelectedStyling() {
    homeIcon.classList.add("selected");
    mobileHomeIcon.classList.add("selected");
    homeContent.className = "home page visible";
    topHeader.innerHTML = 'Home';
}

function homeUnselectedStyling() {
    homeIcon.classList.remove("selected");
    mobileHomeIcon.classList.remove("selected");
    homeContent.className = "home page hidden";
}

function infoSelectedStyling() {
    infoIcon.classList.add("selected");
    mobileInfoIcon.classList.add("selected");
    infoContent.className = "info page visible";
    topHeader.innerHTML = 'Informations';
}

function infoUnselectedStyling() {
    infoIcon.classList.remove("selected");
    mobileInfoIcon.classList.remove("selected");
    infoContent.className = "info page hidden";
}

function reposSelectedStyling() {
    reposIcon.classList.add("selected");
    mobileReposIcon.classList.add("selected");
    reposContent.className = "repos page visible";
    topHeader.innerHTML = 'Repositories';
}

function reposUnselectedStyling() {
    reposIcon.classList.remove("selected");
    mobileReposIcon.classList.remove("selected");
    reposContent.className = "repos page hidden";
}

function contactSelectedStyling() {
    contactIcon.classList.add("selected");
    mobileContactIcon.classList.add("selected");
    contactContent.className = "contact page visible";
    topHeader.innerHTML = 'Contact';
}

function contactUnselectedStyling() {
    contactIcon.classList.remove("selected");
    mobileContactIcon.classList.remove("selected");
    contactContent.className = "contact page hidden";
}

function homeSelected() {
    if (homeIcon.className === "icon-container" | homeIcon.className === "mobile-icon-container") {
        homeSelectedStyling();
        infoUnselectedStyling();
        reposUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'home');
    }
}

function reposSelected() {
    if (reposIcon.className === "icon-container" | reposIcon.className === "mobile-icon-container") {
        reposSelectedStyling();
        homeUnselectedStyling();
        infoUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'repos');
    }
}

function infoSelected() {
    if (infoIcon.className === "icon-container" | infoIcon.className === "mobile-icon-container") {
        infoSelectedStyling();
        homeUnselectedStyling();
        reposUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'info');
    }
}

function contactSelected() {
    if (contactIcon.className === "icon-container" | contactIcon.className === "mobile-icon-container") {
        contactSelectedStyling();
        homeUnselectedStyling();
        reposUnselectedStyling();
        infoUnselectedStyling();
        localStorage.setItem('page-section', 'contact');
    }
}

function openNavPanel() {
    if (mobileNavPanel.className === "mobile-panel-wrapper") {
        mobileNavPanel.classList.add("visible");
        pageContentWrapper.classList.add("no-scroll");
    }
}

function closeNavPanel() {
    if (mobileNavPanel.className === "mobile-panel-wrapper visible") {
        mobileNavPanel.classList.remove("visible");
        pageContentWrapper.classList.remove("no-scroll");
    }
}