function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function on() {
    const subtitle = document.getElementById('subtitle');
    subtitle.innerText = "Ziad OUALHADJ_";
}

function off() {
    const subtitle = document.getElementById('subtitle');
    subtitle.innerText = "Ziad OUALHADJ" + '\xa0';
}

function updateSubtitleStyling() {
    on();
    sleep(1000).then(off);
}

setInterval(function() {
    updateSubtitleStyling();
    return arguments.callee;
}(), 2000);