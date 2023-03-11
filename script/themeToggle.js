const themeIcon = document.querySelector("#theme-icon")
const mobileThemeIcon = document.querySelector("#mobile-theme-icon")

function lightTheme() {
    themeIcon.innerHTML = "&#xe901;";
    mobileThemeIcon.innerHTML = "&#xe901;";
    document.documentElement.setAttribute('theme', 'light');
}

function darkTheme() {
    themeIcon.innerHTML = "&#xe908;";
    mobileThemeIcon.innerHTML = "&#xe908;";
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