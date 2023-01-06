function getCurrentProgress(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return (((hour + (minute * (5 / 3) / 100)) / 24) * 100).toFixed(0)
}

function updateUI() {
    const percent = getCurrentProgress();

    const barItem = document.getElementById('progress-bar');
    barItem.style.width = `${percent}%`;

    const counterItem = document.getElementById('progress-value');
    counterItem.textContent = `Today's progress : ${percent}%`;
}

setInterval(function() {
    updateUI();
    return arguments.callee;
}(), 60000);