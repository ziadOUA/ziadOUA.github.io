function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    // let seconds = date.getSeconds()

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10 ) {
        minute = "0" + minute;
    }

    document.querySelector(".clock").innerText = `${hour}\n${minute}`;
    setTimeout(clock, 5000);
}

clock();