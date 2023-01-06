function date() {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let date_num = date.getDate()

    if (month >= 10 && date_num >= 10) {
        document.getElementById("date").innerHTML = date_num + '/' + month + '/' + year;
    }

    if (month < 10 && date_num >= 10) {
        document.getElementById("date").innerHTML = date_num + '/' + '0' + month + '/' + year;
    }

    if (month >= 10 && date_num < 10) {
        document.getElementById("date").innerHTML = '0' + date_num + '/' + month + '/' + year;
    }

    if (month < 10 && date_num < 10) {
        document.getElementById("date").innerHTML = '0' + date_num + '/' + '0' + month + '/' + year;
    }
}

date()