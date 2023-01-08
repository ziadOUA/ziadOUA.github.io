const homeIcon = document.getElementById("home-icon");
// const mobileHomeIcon = document.getElementById("mobile-home-icon");
const reposIcon = document.getElementById("repos-icon");
// const mobileReposIcon = document.getElementById("mobile-repos-icon");
const infoIcon = document.getElementById("info-icon");
// const mobileInfoIcon = document.getElementById("mobile-info-icon");
const contactIcon = document.getElementById("contact-icon");
// const mobileContactIcon = document.getElementById("mobile-contact-icon");

// const homeContent = document.getElementById("home-content")
// const reposContent = document.getElementById('repos-content')
// const infoContent = document.getElementById("info-content")
// const contactContent = document.getElementById("contact-content")

function homeSelectedStyling() {
    homeIcon.classList.add("selected");
    // mobileHomeIcon.classList.add("selected");
    // homeContent.className = "home-content visible";
}

function homeUnselectedStyling() {
    homeIcon.classList.remove("selected");
    // mobileHomeIcon.classList.remove("selected");
    // homeContent.className = "home-content hidden";
}

function infoSelectedStyling() {
    infoIcon.classList.add("selected");
    // mobileInfoIcon.classList.add("selected");
    // infoContent.className = "info-content visible";
}

function infoUnselectedStyling() {
    infoIcon.classList.remove("selected");
    // mobileInfoIcon.classList.remove("selected");
    // infoContent.className = "info-content hidden";
}

function reposSelectedStyling() {
    reposIcon.classList.add("selected");
    // mobileReposIcon.classList.add("selected");
    // reposContent.className = "repos-content visible";
}

function reposUnselectedStyling() {
    reposIcon.classList.remove("selected");
    // mobileReposIcon.classList.remove("selected");
    // reposContent.className = "repos-content hidden";
}

function contactSelectedStyling() {
    contactIcon.classList.add("selected");
    // mobileContactIcon.classList.add("selected");
    // contactContent.className = "contact-content visible";
}

function contactUnselectedStyling() {
    contactIcon.classList.remove("selected");
    // mobileContactIcon.classList.remove("selected");
    // contactContent.className = "contact-content hidden";
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