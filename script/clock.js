function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    hour = update(hour);
    minute = update(minute);

    document.getElementById("clock").innerText = `${hour}\n${minute}`;
    setTimeout(clock, 60000);
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}

clock();