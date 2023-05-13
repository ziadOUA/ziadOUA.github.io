function date() {
    let date = new Date();

    date_now = date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
}

date();