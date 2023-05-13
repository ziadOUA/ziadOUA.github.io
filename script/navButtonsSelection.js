const pageContentWrapper = document.querySelector('.page-content-wrapper');

const overlay = document.querySelector('.overlay');

const homeIcon = document.querySelector("#home-icon");
const mobileHomeIcon = document.querySelector("#mobile-home-icon");
const reposIcon = document.querySelector("#repos-icon");
const mobileReposIcon = document.querySelector("#mobile-repos-icon");
const infoIcon = document.querySelector("#info-icon");
const mobileInfoIcon = document.querySelector("#mobile-info-icon");
const contactIcon = document.querySelector("#contact-icon");
const mobileContactIcon = document.querySelector("#mobile-contact-icon");

const homeFontIcon = document.querySelector("#home-font-icon");
const mobileHomeFontIcon = document.querySelector("#mobile-home-font-icon");
const infoFontIcon = document.querySelector("#info-font-icon");
const mobileInfoFontIcon = document.querySelector("#mobile-info-font-icon");
const contactFontIcon = document.querySelector("#contact-font-icon");
const mobileContactFontIcon = document.querySelector("#mobile-contact-font-icon");

const homeContent = document.querySelector("#home-page");
const reposContent = document.querySelector('#repos-page');
const infoContent = document.querySelector("#info-page");
const contactContent = document.querySelector("#contact-page");

const mobileNavBar = document.querySelector('.navbar-mobile-wrapper');
const mobileNavPanel = document.querySelector(".mobile-panel-wrapper");

let sectionOnLoad = localStorage.getItem("page-section");

if (sectionOnLoad === "home") {
    homeSelected();
    homeFontIcon.innerHTML = "&#xe905;";
    mobileHomeFontIcon.innerHTML = "&#xe905;";
}

if (sectionOnLoad === "repos") {
    reposSelected();
}

if (sectionOnLoad === "info") {
    infoSelected();
    infoFontIcon.innerHTML = "&#xe907;";
    mobileInfoFontIcon.innerHTML = "&#xe907;";
}

if (sectionOnLoad === "contact") {
    contactSelected();
    contactFontIcon.innerHTML = "&#xe90b;";
    mobileContactFontIcon.innerHTML = "&#xe90b;";
}

function scrollTop() {
    document.querySelector(".page-content-wrapper").scrollTop = 0;
}

function homeSelectedStyling() {
    homeIcon.classList.add("selected");
    mobileHomeIcon.classList.add("selected");
    homeContent.className = "home page visible";
    homeFontIcon.innerHTML = "&#xe905;";
    mobileHomeFontIcon.innerHTML = "&#xe905;";
}

function homeUnselectedStyling() {
    homeIcon.classList.remove("selected");
    mobileHomeIcon.classList.remove("selected");
    homeContent.className = "home page hidden";
    homeFontIcon.innerHTML = "&#xe904;"
    mobileHomeFontIcon.innerHTML = "&#xe904;"
}

function infoSelectedStyling() {
    infoIcon.classList.add("selected");
    mobileInfoIcon.classList.add("selected");
    infoContent.className = "info page visible";
    infoFontIcon.innerHTML = "&#xe907;";
    mobileInfoFontIcon.innerHTML = "&#xe907;";
}

function infoUnselectedStyling() {
    infoIcon.classList.remove("selected");
    mobileInfoIcon.classList.remove("selected");
    infoContent.className = "info page hidden";
    infoFontIcon.innerHTML = "&#xe906;";
    mobileInfoFontIcon.innerHTML = "&#xe906;";
}

function reposSelectedStyling() {
    reposIcon.classList.add("selected");
    mobileReposIcon.classList.add("selected");
    reposContent.className = "repos page visible";
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
    contactFontIcon.innerHTML = "&#xe90b;";
    mobileContactFontIcon.innerHTML = "&#xe90b;";
}

function contactUnselectedStyling() {
    contactIcon.classList.remove("selected");
    mobileContactIcon.classList.remove("selected");
    contactContent.className = "contact page hidden";
    contactFontIcon.innerHTML = "&#xe90a;";
    mobileContactFontIcon.innerHTML = "&#xe90a;";
}

function homeSelected() {
    if (homeIcon.className === "icon-container") {
        scrollTop();
        homeSelectedStyling();
        infoUnselectedStyling();
        reposUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'home');
    }
}

function reposSelected() {
    if (reposIcon.className === "icon-container") {
        scrollTop();
        reposSelectedStyling();
        homeUnselectedStyling();
        infoUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'repos');
    }
}

function infoSelected() {
    if (infoIcon.className === "icon-container") {
        scrollTop();
        infoSelectedStyling();
        homeUnselectedStyling();
        reposUnselectedStyling();
        contactUnselectedStyling();
        localStorage.setItem('page-section', 'info');
    }
}

function contactSelected() {
    if (contactIcon.className === "icon-container") {
        scrollTop();
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
        overlay.classList.remove("hidden");
        mobileNavBar.className = "navbar-mobile-wrapper hiding"
        setTimeout(() => { mobileNavBar.className = "navbar-mobile-wrapper hidden" }, 200);
    }
}

function closeNavPanel() {
    if (mobileNavPanel.className === "mobile-panel-wrapper visible") {
        mobileNavPanel.className = "mobile-panel-wrapper hiding"
        setTimeout(() => { mobileNavPanel.className = "mobile-panel-wrapper" }, 200);
        pageContentWrapper.classList.remove("no-scroll");
        overlay.classList.add("hiding");
        setTimeout(() => { overlay.className = "overlay hidden" }, 200);
        mobileNavBar.classList.remove("hidden");
        setTimeout(() => { mobileNavBar.className = "navbar-mobile-wrapper visible" }, 200);
    }
}