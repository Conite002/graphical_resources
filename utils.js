function getAngle(angle, index) {
    return -angle*(index + 0.25);
}

function getText(text){
    var tbox = document.createElement("span");
    tbox.style.visibility = "hidden";
    tbox.style.position = "absolute";
    tbox.style.whiteSpace = "nowrap";
    tbox.textContent = text;
    document.body.appendChild(tbox);
    tbox.width = tbox.offsetWidth;
    return tbox;
}

function reduceText(t_width, diameter, value) {
    var estimatedChars = Math.floor(value.length * diameter / t_width);
    var maxChars = Math.max(0, estimatedChars-1);
    value = value.substring(0, maxChars);
    t_width = getText(value).width;
    while (t_width > 0 && t_width >= diameter){
        value = value.slice(0, -1);
        t_width = getText(value).width;
    }
    value = value.slice(0,-3)+"...";
    return value;
}

