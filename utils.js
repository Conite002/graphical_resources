var getAngle = (angle, index)=>{
    return -angle*(index + 0.25);
}

var getText = (text) =>{
    var tbox = document.createElement("span");
    tbox.style.visibility = "hidden";
    tbox.style.position = "absolute";
    tbox.style.whiteSpace = "nowrap";
    tbox.textContent = text;
    document.body.appendChild(tbox);
    tbox.width = tbox.offsetWidth;
    return tbox;
}

var reduceText = (t_width, diameter, value)=>{
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

var setTextSize = (text, shape, name)=>{
    var t_width = getText(name).width;
    if (t_width > shape.r * 2) {
      text.text = reduceText(t_width, shape.r * 2, name);
      text.c_svg.textContent = text.text;
      t_width = getText(text.text).width;
    }
    var deltaX = (shape.r * 2 - t_width)/2;
    text.x = shape.x - shape.r + deltaX/2;
    text.redraw();
  }
