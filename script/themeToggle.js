const favicon16x16 = document.querySelector('link[sizes="16x16"]')
const favicon32x32 = document.querySelector('link[sizes="32x32"]')

const themeIcon = document.querySelector("#theme-icon")
const mobileThemeIcon = document.querySelector("#mobile-theme-icon")
const mobileThemeLabel = document.querySelector(".mobile-change-theme-label")

function lightTheme() {
    themeIcon.textContent = "dark_mode";
    mobileThemeIcon.textContent = "dark_mode";
    mobileThemeLabel.textContent = "Switch to dark mode";
    document.documentElement.setAttribute('theme', 'light');
}

function darkTheme() {
    themeIcon.textContent = "light_mode";
    mobileThemeIcon.textContent = "light_mode";
    mobileThemeLabel.textContent = "Switch to light mode";
    document.documentElement.setAttribute('theme', 'dark');
}

(function() {
    let onPageLoad = localStorage.getItem("theme") || "";
    if (onPageLoad === "") {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            localStorage.setItem("theme", "light_mode");
            lightTheme()
        }
        else {
            localStorage.setItem("theme", "dark_mode");
            darkTheme()
        }
    }

    if (onPageLoad === "light_mode") {
        lightTheme()
    }
    if (onPageLoad === "dark_mode") {
        darkTheme()
    }
})();

(function () {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        favicon32x32.setAttribute('href', 'res/favicon/light/favicon-32x32.png')
        favicon16x16.setAttribute('href', 'res/favicon/light/favicon-16x16.png')
    }
    else {
        favicon32x32.setAttribute('href', 'res/favicon/dark/favicon-32x32.png')
        favicon16x16.setAttribute('href', 'res/favicon/dark/favicon-16x16.png')
    }
})();

function themeToggle() {
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark_mode") {
        localStorage.setItem("theme", "light_mode");
        lightTheme()
    }
    else if (theme && theme === "light_mode") {
        localStorage.setItem("theme", "dark_mode");
        darkTheme()
    }
}