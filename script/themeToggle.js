const themeIcon = document.querySelector("#theme-icon")
const mobileThemeIcon = document.querySelector("#mobile-theme-icon")

let theme = localStorage.getItem("theme");

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

function themeToggleHover() {
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark_mode") {
        themeIcon.innerHTML = "&#xe909;";
        mobileThemeIcon.innerHTML = "&#xe909;";
    }

    if (theme && theme === "light_mode") {
        themeIcon.innerHTML = "&#xe902;";
        mobileThemeIcon.innerHTML = "&#xe902;";
    }
}

function themeToggleLeave() {
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark_mode") {
        themeIcon.innerHTML = "&#xe908;";
        mobileThemeIcon.innerHTML = "&#xe908;";
    }

    if (theme && theme === "light_mode") {
        themeIcon.innerHTML = "&#xe901;";
        mobileThemeIcon.innerHTML = "&#xe901;";
    }
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