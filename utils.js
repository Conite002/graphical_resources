function getAngle(angle, index) {
    return -angle*(index + 0.25);
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