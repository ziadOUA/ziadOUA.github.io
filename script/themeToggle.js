const favicon16x16 = document.querySelector('link[sizes="16x16"]')
const favicon32x32 = document.querySelector('link[sizes="32x32"]')

function lightTheme() {
    document.getElementById("theme-icon").textContent = "dark_mode";
    document.documentElement.setAttribute('theme', 'light');
}

function darkTheme() {
    document.getElementById("theme-icon").textContent = "light_mode";
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

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        favicon32x32.setAttribute('href', 'res/favicon/light/favicon-32x32.png')
        favicon16x16.setAttribute('href', 'res/favicon/light/favicon-16x16.png')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon32x32.setAttribute('href', 'res/favicon/dark/favicon-32x32.png')
        favicon16x16.setAttribute('href', 'res/favicon/dark/favicon-16x16.png')
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