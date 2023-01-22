function date() {
    let date = new Date();

    document.querySelector(".date").innerHTML = date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
}

date();