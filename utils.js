function getAngle(angle, index) {
    return -angle*(index + 0.25);
}

function createHiddenElementWithText(texte) {
    var textspan = document.createElement("span");
    textspan.textContent = texte;
    return textspan;
}

function getTextWidth(texte){
    var tbox = document.createElement("span");
    tbox.style.visibility = "hidden";
    tbox.style.position = "absolute";
    tbox.style.whiteSpace = "nowrap";
    tbox.textContent = texte;
    document.body.appendChild(tbox);
    var width = tbox.offsetWidth;
    document.body.removeChild(tbox);
    return width;
}

function reduceText(t_width, diameter, value) {
    var estimatedChars = Math.floor(value.length * diameter / t_width);
    var maxChars = Math.max(0, estimatedChars-1);
    value = value.substring(0, maxChars);
    t_width = getTextWidth(value);
    while (t_width > 0 && t_width >= diameter){
        console.log(value);
        value = value.slice(0, -1);
        console.log(value);
        t_width = getTextWidth(value);
    }
    // value = value.slice(0,-4)+"...";
    return value;
}

