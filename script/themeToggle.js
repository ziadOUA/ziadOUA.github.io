function lightTheme() {
    document.getElementById("theme-icon").textContent = "dark_mode"
    document.documentElement.setAttribute('theme', 'light');
}

function darkTheme() {
    document.getElementById("theme-icon").textContent = "light_mode"
    document.documentElement.setAttribute('theme', 'dark');
}

(function() {
    let onPageLoad = localStorage.getItem("theme") || "";
    if (onPageLoad === "") {
        localStorage.setItem("theme", "light_mode");
        lightTheme()
    }
    else if (onPageLoad === "light_mode") {
        lightTheme()
    }
    else if (onPageLoad === "dark_mode") {
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